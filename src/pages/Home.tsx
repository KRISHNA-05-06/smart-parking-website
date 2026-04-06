import { useState } from 'react';
import { ParkingLotCard } from '../components/ParkingLotCard';
import { PermitLegend } from '../components/PermitLegend';
import { PermitType } from '../types/parking';
import { Search, RefreshCw, Filter, ChevronDown, AlertCircle, Info, Map } from 'lucide-react';
import { useParkingData } from '../context/ParkingDataContext';
import { getNearbyLots } from '../data/nearbyLots';
import logoImage from 'figma:asset/8e9d50e3b63d602b22e7947c83472c6ae39fb1ed.png';
import spotLogo from 'figma:asset/b93d0e644146cc2978db0553968001e0d173c2e0.png';

const PERMIT_OPTIONS: { value: PermitType | 'All'; label: string }[] = [
  { value: 'All', label: 'All Permit Types' },
  
  // Standard Permits
  { value: 'S', label: 'S — Student' },
  { value: 'R', label: 'R — Resident' },
  { value: 'E', label: 'E — Staff' },
  { value: 'Y', label: 'Y — Park-n-Ride / Alumni' },
  { value: 'D', label: 'D — Daily / Visitor' },
  
  // Gold Zone Permits
  { value: 'GZ', label: 'GZ — Gold Zone Staff' },
  { value: 'GZ01', label: 'GZ01 — Gold Zone 01' },
  { value: 'GZ02', label: 'GZ02 — Gold Zone 02' },
  { value: 'GZ08', label: 'GZ08 — Gold Zone 08' },
  { value: 'GZ09', label: 'GZ09 — Gold Zone 09' },
  { value: 'GZ33', label: 'GZ33 — Gold Zone 33' },
  { value: 'GZ36', label: 'GZ36 — Gold Zone 36' },
  { value: 'GZ42', label: 'GZ42 — Gold Zone 42' },
  
  // Moffitt Employee Permits
  { value: 'AG33', label: 'AG33 — Moffitt Employee' },
  { value: 'HE', label: 'HE — Moffitt Employee' },
  { value: 'AG42', label: 'AG42 — Moffitt Employee' },
  
  // Other Permits
  { value: 'WB', label: 'WB — White Badge' },
];

export function Home() {
  const { lots, lastRefreshed, refreshData, isRefreshing } = useParkingData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPermit, setSelectedPermit] = useState<PermitType | 'All'>('All');

  const filteredLots = lots.filter(lot => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      lot.name.toLowerCase().includes(term) ||
      lot.location.toLowerCase().includes(term) ||
      (lot.lotNumber?.toLowerCase().includes(term) ?? false);
    const matchesPermit = selectedPermit === 'All' || lot.permitTypes.includes(selectedPermit);
    return matchesSearch && matchesPermit;
  }).sort((a, b) => {
    // Sort by available spaces in descending order (most available first)
    return b.availableSpaces - a.availableSpaces;
  });

  // Check if all filtered lots are full and we have search/filter criteria active
  const allFilteredLotsFull = filteredLots.length > 0 && filteredLots.every(lot => lot.availableSpaces === 0);
  const hasSearchOrFilter = searchTerm.trim() !== '' || selectedPermit !== 'All';

  // Get nearby lots when all searched/filtered lots are full
  const nearbyLots = (allFilteredLotsFull && hasSearchOrFilter) ? (() => {
    // Collect all nearby lot names from the filtered lots
    const nearbyLotNames = new Set<string>();
    filteredLots.forEach(lot => {
      const nearby = getNearbyLots(lot.name);
      nearby.forEach(name => nearbyLotNames.add(name));
    });

    // Find the actual lot objects and filter by permit if needed
    return lots
      .filter(lot => nearbyLotNames.has(lot.name))
      .filter(lot => {
        // If a permit filter is active, only show nearby lots with that permit
        if (selectedPermit !== 'All') {
          return lot.permitTypes.includes(selectedPermit);
        }
        return true;
      })
      .filter(lot => lot.availableSpaces > 0) // Only show nearby lots that have availability
      .sort((a, b) => b.availableSpaces - a.availableSpaces);
  })() : [];

  const totalAvailable = lots.reduce((sum, lot) => sum + lot.availableSpaces, 0);
  const totalSpaces = lots.reduce((sum, lot) => sum + lot.totalSpaces, 0);
  const totalOccupancy = ((totalSpaces - totalAvailable) / totalSpaces * 100).toFixed(0);

  const goodCount = lots.filter(l => {
    const rate = ((l.totalSpaces - l.availableSpaces) / l.totalSpaces) * 100;
    return rate < 50;
  }).length;
  const moderateCount = lots.filter(l => {
    const rate = ((l.totalSpaces - l.availableSpaces) / l.totalSpaces) * 100;
    return rate >= 50 && rate < 85;
  }).length;
  const criticalCount = lots.filter(l => {
    const rate = ((l.totalSpaces - l.availableSpaces) / l.totalSpaces) * 100;
    return rate >= 85;
  }).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <nav className="bg-[#006747] border-b border-[#005538]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-0">
            <img src={logoImage} alt="USF Logo" className="w-10 h-10 object-contain" style={{ mixBlendMode: 'screen' }} />
            <div className="flex items-center gap-2 -ml-2">
              <img src={spotLogo} alt="USF Smart Parking" className="h-10 object-contain" style={{ mixBlendMode: 'screen' }} />
              <span className="text-[#CFC493] text-xs hidden sm:inline">University of South Florida</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#CFC493] text-xs">
            {/* Campus Map Button - Direct Link */}
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
          <h1 className="text-white mb-1" style={{ fontSize: '2rem', fontWeight: 700 }}>Find Your Spot</h1>
          <p className="text-green-200 mb-8" style={{ fontSize: '0.95rem' }}>Live parking availability across all USF lots — updated every 30 seconds</p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">{totalAvailable.toLocaleString()}</div>
              <div className="text-green-200 text-xs mt-0.5">Open Spaces</div>
              <div className="text-green-300 text-xs">out of {totalSpaces.toLocaleString()} total</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">{totalOccupancy}%</div>
              <div className="text-green-200 text-xs mt-0.5">Campus Full</div>
              <div className="text-green-300 text-xs">right now</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="text-3xl font-bold text-white">{goodCount}</div>
              </div>
              <div className="text-green-200 text-xs mt-0.5">Easy to Park</div>
              <div className="text-green-300 text-xs">under half full</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="text-3xl font-bold text-white">{criticalCount}</div>
              </div>
              <div className="text-green-200 text-xs mt-0.5">Almost Gone</div>
              <div className="text-green-300 text-xs">over 85% full</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 pb-12">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
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

            {/* Filter */}
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

            {/* Refresh */}
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
              Updated at {lastRefreshed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} · refreshes automatically every 30 seconds
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Lots Grid */}
          <div className="flex-1 min-w-0">
            {filteredLots.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 p-16 text-center">
                <AlertCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">No lots match your search</p>
                <p className="text-gray-400 text-sm mt-1">Try a different name, location, or permit type</p>
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

                {/* Show nearby lots if all filtered lots are full */}
                {allFilteredLotsFull && nearbyLots.length > 0 && (
                  <div className="mt-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-amber-900 font-medium text-sm">
                          Those lots are all full right now. Here are some nearby options that still have space:
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {nearbyLots.map((lot) => (
                        <ParkingLotCard key={`nearby-${lot.id}`} lot={lot} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <PermitLegend />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#006747] text-green-200 py-6 px-6 text-center text-xs">
        <p>© 2026 University of South Florida · Parking & Transportation Services</p>
        <p className="mt-1 text-green-300">Availability updates every 30 seconds</p>
      </footer>
    </div>
  );
}