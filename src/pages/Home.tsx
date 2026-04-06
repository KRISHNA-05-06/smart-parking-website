import { useState } from 'react';
import { ParkingLotCard } from '../components/ParkingLotCard';
import { PermitLegend } from '../components/PermitLegend';
import { PermitType } from '../types/parking';
import { Search, RefreshCw, Filter, Car, ChevronDown, AlertCircle, Info, Map } from 'lucide-react';
import { useParkingData } from '../context/ParkingDataContext';
import { getNearbyLots } from '../data/nearbyLots';

// All the permit types we support, grouped so the dropdown makes sense to read
const PERMIT_OPTIONS: { value: PermitType | 'All'; label: string }[] = [
  { value: 'All', label: 'All Permit Types' },

  // Regular permits most people have
  { value: 'S', label: 'S — Student' },
  { value: 'R', label: 'R — Resident' },
  { value: 'E', label: 'E — Staff' },
  { value: 'Y', label: 'Y — Park-n-Ride / Alumni' },
  { value: 'D', label: 'D — Daily / Visitor' },

  // Gold Zone permits (assigned to specific lots)
  { value: 'GZ', label: 'GZ — Gold Zone Staff' },
  { value: 'GZ01', label: 'GZ01 — Gold Zone 01' },
  { value: 'GZ02', label: 'GZ02 — Gold Zone 02' },
  { value: 'GZ08', label: 'GZ08 — Gold Zone 08' },
  { value: 'GZ09', label: 'GZ09 — Gold Zone 09' },
  { value: 'GZ33', label: 'GZ33 — Gold Zone 33' },
  { value: 'GZ36', label: 'GZ36 — Gold Zone 36' },
  { value: 'GZ42', label: 'GZ42 — Gold Zone 42' },

  // Moffitt staff permits
  { value: 'AG33', label: 'AG33 — Moffitt Employee' },
  { value: 'HE', label: 'HE — Moffitt Employee' },
  { value: 'AG42', label: 'AG42 — Moffitt Employee' },

  // Misc
  { value: 'WB', label: 'WB — White Badge' },
];

export function Home() {
  const { lots, lastRefreshed, refreshData, isRefreshing } = useParkingData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPermit, setSelectedPermit] = useState<PermitType | 'All'>('All');

  // Filter by search text and permit type, then put the most available lots at the top
  const filteredLots = lots
    .filter(lot => {
      const query = searchTerm.toLowerCase();
      const nameMatch = lot.name.toLowerCase().includes(query);
      const locationMatch = lot.location.toLowerCase().includes(query);
      const numberMatch = lot.lotNumber?.toLowerCase().includes(query) ?? false;
      const matchesSearch = nameMatch || locationMatch || numberMatch;
      const matchesPermit = selectedPermit === 'All' || lot.permitTypes.includes(selectedPermit);
      return matchesSearch && matchesPermit;
    })
    .sort((a, b) => b.availableSpaces - a.availableSpaces);

  // If someone searched/filtered and every result is full, we'll suggest nearby lots
  const everyResultIsFull = filteredLots.length > 0 && filteredLots.every(lot => lot.availableSpaces === 0);
  const userIsSearchingOrFiltering = searchTerm.trim() !== '' || selectedPermit !== 'All';

  const suggestedNearbyLots =
    everyResultIsFull && userIsSearchingOrFiltering
      ? (() => {
          // Gather the names of nearby lots from each result
          const nearbyNames = new Set<string>();
          filteredLots.forEach(lot => {
            getNearbyLots(lot.name).forEach(name => nearbyNames.add(name));
          });

          return lots
            .filter(lot => nearbyNames.has(lot.name))
            .filter(lot => {
              // Respect the permit filter here too
              if (selectedPermit !== 'All') return lot.permitTypes.includes(selectedPermit);
              return true;
            })
            .filter(lot => lot.availableSpaces > 0)
            .sort((a, b) => b.availableSpaces - a.availableSpaces);
        })()
      : [];

  // Campus-wide summary numbers for the stat cards
  const totalAvailable = lots.reduce((sum, lot) => sum + lot.availableSpaces, 0);
  const totalSpaces = lots.reduce((sum, lot) => sum + lot.totalSpaces, 0);
  const campusOccupancyPct = ((totalSpaces - totalAvailable) / totalSpaces * 100).toFixed(0);

  const lotsWithGoodAvailability = lots.filter(lot => {
    const pct = ((lot.totalSpaces - lot.availableSpaces) / lot.totalSpaces) * 100;
    return pct < 50;
  }).length;

  const lotsFillingUp = lots.filter(lot => {
    const pct = ((lot.totalSpaces - lot.availableSpaces) / lot.totalSpaces) * 100;
    return pct >= 50 && pct < 85;
  }).length;

  const lotsNearlyFull = lots.filter(lot => {
    const pct = ((lot.totalSpaces - lot.availableSpaces) / lot.totalSpaces) * 100;
    return pct >= 85;
  }).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <nav className="bg-[#006747] border-b border-[#005538]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#CFC493] rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-[#006747]" />
            </div>
            <div>
              <span className="text-white font-semibold" style={{ fontSize: '1rem' }}>USF Smart Parking</span>
              <span className="text-[#CFC493] text-xs ml-2 hidden sm:inline">University of South Florida</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#CFC493] text-xs">
            {/* Opens the official USF campus parking map PDF */}
            <a
              href="https://www.usf.edu/parking/documents/parkingmap.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors border border-white/20"
            >
              <Map className="w-4 h-4" />
              <span className="hidden sm:inline">Campus Map</span>
            </a>

            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Live Data</span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="bg-[#006747] text-white pb-16 pt-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white mb-1" style={{ fontSize: '2rem', fontWeight: 700 }}>Campus Parking Dashboard</h1>
          <p className="text-green-200 mb-8" style={{ fontSize: '0.95rem' }}>Real-time availability across all USF parking facilities</p>

          {/* Quick stats at a glance */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">{totalAvailable.toLocaleString()}</div>
              <div className="text-green-200 text-xs mt-0.5">Total Available</div>
              <div className="text-green-300 text-xs">of {totalSpaces.toLocaleString()} spaces</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">{campusOccupancyPct}%</div>
              <div className="text-green-200 text-xs mt-0.5">Campus Occupancy</div>
              <div className="text-green-300 text-xs">across all lots</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="text-3xl font-bold text-white">{lotsWithGoodAvailability}</div>
              </div>
              <div className="text-green-200 text-xs mt-0.5">Lots Available</div>
              <div className="text-green-300 text-xs">&lt;50% occupied</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="text-3xl font-bold text-white">{lotsNearlyFull}</div>
              </div>
              <div className="text-green-200 text-xs mt-0.5">Lots Nearly Full</div>
              <div className="text-green-300 text-xs">&gt;85% occupied</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 pb-12">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search box */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name, location, or lot number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006747] focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400"
                style={{ fontSize: '0.875rem' }}
              />
            </div>

            {/* Permit type filter */}
            <div className="relative sm:w-64">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              <select
                value={selectedPermit}
                onChange={(e) => setSelectedPermit(e.target.value as PermitType | 'All')}
                className="w-full pl-9 pr-8 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006747] focus:border-transparent bg-gray-50 text-gray-900 appearance-none"
                style={{ fontSize: '0.875rem' }}
              >
                {PERMIT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Manual refresh button */}
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className="flex items-center justify-center gap-2 bg-[#006747] text-white py-2.5 px-5 rounded-lg hover:bg-[#005538] transition-colors disabled:opacity-70 flex-shrink-0"
              style={{ fontSize: '0.875rem' }}
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>

          <div className="flex items-center gap-1 mt-2 text-gray-400">
            <Info className="w-3 h-3" />
            <span style={{ fontSize: '0.7rem' }}>
              Last updated: {lastRefreshed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} · Auto-refreshes every 30 seconds
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Lots Grid */}
          <div className="flex-1 min-w-0">
            {filteredLots.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 p-16 text-center">
                <AlertCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">No parking lots found</p>
                <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedPermit('All'); }}
                  className="mt-4 text-[#006747] text-sm hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-500 text-sm">
                    Showing <span className="font-medium text-gray-800">{filteredLots.length}</span> of {lots.length} lots
                    {selectedPermit !== 'All' && <span className="ml-1">· Filtered by <strong>{selectedPermit}</strong></span>}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredLots.map((lot) => (
                    <ParkingLotCard key={lot.id} lot={lot} />
                  ))}
                </div>

                {/* If everything's full, show nearby alternatives */}
                {everyResultIsFull && suggestedNearbyLots.length > 0 && (
                  <div className="mt-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-amber-900 font-medium text-sm">
                            The lot you searched or the lots in the area you searched are full. Suggested nearby lots:
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {suggestedNearbyLots.map((lot) => (
                        <ParkingLotCard key={`nearby-${lot.id}`} lot={lot} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar with permit legend */}
          <div className="lg:w-64 flex-shrink-0">
            <PermitLegend />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#006747] text-green-200 py-6 px-6 text-center text-xs">
        <p>© 2026 University of South Florida · Parking & Transportation Services</p>
        <p className="mt-1 text-green-300">Data refreshes automatically every 30 seconds</p>
      </footer>
    </div>
  );
}
