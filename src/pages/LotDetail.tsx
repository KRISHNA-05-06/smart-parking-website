import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import {
  ArrowLeft, MapPin, Layers, DollarSign, Clock, CheckCircle,
  RefreshCw, Car, AlertTriangle, Info, TrendingUp, CalendarClock, Bus
} from 'lucide-react';
import { ParkingLotDetail, PERMIT_INFO, getOccupancyStatus, getStatusColors } from '../types/parking';
import { useParkingData } from '../context/ParkingDataContext';

// map bull runner route names to tailwind colour classes
const ROUTE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  red:    { bg: 'bg-red-500',    text: 'text-white', border: 'border-red-600'    },
  orange: { bg: 'bg-orange-500', text: 'text-white', border: 'border-orange-600' },
  brown:  { bg: 'bg-amber-700',  text: 'text-white', border: 'border-amber-800'  },
  blue:   { bg: 'bg-blue-500',   text: 'text-white', border: 'border-blue-600'   },
  purple: { bg: 'bg-purple-500', text: 'text-white', border: 'border-purple-600' },
  green:  { bg: 'bg-green-600',  text: 'text-white', border: 'border-green-700'  },
  plum:   { bg: 'bg-purple-600', text: 'text-white', border: 'border-purple-700' },
};

function getBusRouteColor(route: string) {
  return ROUTE_COLORS[route.toLowerCase()] ?? { bg: 'bg-gray-500', text: 'text-white', border: 'border-gray-600' };
}

function isWeekday() {
  const d = new Date().getDay();
  return d >= 1 && d <= 5;
}

function getDayLabel() {
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  return `${day} (${isWeekday() ? 'Weekday' : 'Weekend'})`;
}

export function LotDetail() {
  const { lotId } = useParams<{ lotId: string }>();
  const { lots, lastRefreshed, refreshData, isRefreshing } = useParkingData();

  const [lot, setLot] = useState<ParkingLotDetail | undefined>(
    lots.find(l => l.id === lotId)
  );

  useEffect(() => {
    const found = lots.find(l => l.id === lotId);
    if (found) setLot(found);
  }, [lots, lotId]);

  if (!lot) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Car className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-gray-800 mb-2">Parking Lot Not Found</h2>
          <Link to="/" className="text-[#006747] hover:underline text-sm">← Return to Dashboard</Link>
        </div>
      </div>
    );
  }

  const occupancyRate = ((lot.totalSpaces - lot.availableSpaces) / lot.totalSpaces) * 100;
  const status = getOccupancyStatus(occupancyRate);
  const colors = getStatusColors(status);

  const statusBg =
    status === 'good' ? 'bg-green-500' :
    status === 'moderate' ? 'bg-orange-500' :
    'bg-red-500';

  const numColor =
    status === 'good' ? 'text-green-600' :
    status === 'moderate' ? 'text-orange-600' :
    'text-red-600';

  const todayRoutes = lot.alternativeTransportation
    ? (isWeekday() ? lot.alternativeTransportation.weekdayRoutes : lot.alternativeTransportation.weekendRoutes)
    : [];

  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="bg-[#006747] border-b border-[#005538]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#CFC493] rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-[#006747]" />
            </div>
            <span className="text-white font-semibold" style={{ fontSize: '1rem' }}>USF Smart Parking</span>
          </div>
          <div className="flex items-center gap-2 text-[#CFC493] text-xs">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Live Data</span>
          </div>
        </div>
      </nav>

      <div className="bg-[#006747] text-white pt-6 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-green-200 hover:text-white mb-5 gap-1.5 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to All Lots
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <div>
              {lot.lotNumber && (
                <span className="text-[#CFC493] text-xs font-medium uppercase tracking-wider">{lot.lotNumber}</span>
              )}
              <h1 className="text-white mt-0.5" style={{ fontSize: '1.75rem', fontWeight: 700 }}>{lot.name}</h1>
              <div className="flex items-center text-green-200 gap-1.5 mt-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{lot.location}</span>
              </div>
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${statusBg}`}>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white font-medium text-sm">{colors.label}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* left column */}
          <div className="lg:col-span-2 space-y-5">

            {/* overall availability */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="text-gray-800" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Overall Availability</h2>
                <button
                  onClick={refreshData}
                  disabled={isRefreshing}
                  className="flex items-center gap-1.5 text-sm bg-[#006747] text-white py-1.5 px-3 rounded-lg hover:bg-[#005538] transition-colors disabled:opacity-70"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${numColor}`}>{lot.availableSpaces}</div>
                    <div className="text-gray-500 text-xs mt-1">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-800">{lot.totalSpaces - lot.availableSpaces}</div>
                    <div className="text-gray-500 text-xs mt-1">Occupied</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-800">{lot.totalSpaces}</div>
                    <div className="text-gray-500 text-xs mt-1">Total Spaces</div>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Occupancy Rate</span>
                    <span className="font-medium">{occupancyRate.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${colors.bar}`}
                      style={{ width: `${occupancyRate}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0%</span>
                    <span className="text-amber-600 font-medium">50%</span>
                    <span className="text-red-600 font-medium">85%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-gray-400 mt-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span style={{ fontSize: '0.75rem' }}>
                    Last updated: {lastRefreshed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} · Auto-refreshes every 30 seconds
                  </span>
                </div>
              </div>
            </div>

            {/* per-permit breakdown */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-gray-800" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Availability by Permit Type</h2>
                <p className="text-gray-500 text-xs mt-0.5">Live breakdown per permit category</p>
              </div>
              <div className="p-6 space-y-4">
                {lot.permitAvailability.map(permit => {
                  const pOccupancy = ((permit.total - permit.available) / permit.total) * 100;
                  const pStatus = getOccupancyStatus(pOccupancy);
                  const pColors = getStatusColors(pStatus);
                  const pNumColor =
                    pStatus === 'good' ? 'text-green-600' :
                    pStatus === 'moderate' ? 'text-orange-600' : 'text-red-600';
                  const freePct = (permit.available / permit.total * 100).toFixed(0);

                  return (
                    <div key={permit.permitType} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className={`${PERMIT_INFO[permit.permitType].color} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                            {permit.permitType}
                          </span>
                          <div>
                            <div className="text-gray-800 text-sm font-medium">{PERMIT_INFO[permit.permitType].name}</div>
                            <div className="text-gray-400 text-xs">{PERMIT_INFO[permit.permitType].description}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-xl font-bold ${pNumColor}`}>{permit.available}</div>
                          <div className="text-xs text-gray-400">/ {permit.total} spaces</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${pColors.bar}`}
                            style={{ width: `${permit.available / permit.total * 100}%` }}
                          />
                        </div>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${pColors.badge}`}>
                          {freePct}% free
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* alternative transport — only shown if data exists */}
            {lot.alternativeTransportation && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Bus className="w-4 h-4 text-gray-600" />
                    <h2 className="text-gray-800" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Alternative Transportation</h2>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">Bull Runner shuttle options near this lot</p>
                </div>
                <div className="p-6 space-y-5">
                  <div className="bg-[#006747]/5 border border-[#006747]/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#006747] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-600 text-xs font-medium uppercase tracking-wide mb-1">Nearest Stop</div>
                        <div className="text-gray-800 text-sm font-semibold">{lot.alternativeTransportation.nearestStop}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-gray-700 text-sm font-semibold">Today's Routes</div>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{getDayLabel()}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {todayRoutes.map(route => {
                        const rc = getBusRouteColor(route);
                        return (
                          <div
                            key={route}
                            className={`${rc.bg} ${rc.text} px-3 py-1.5 rounded-lg text-sm font-medium border-2 ${rc.border} inline-flex items-center gap-1.5`}
                          >
                            <Bus className="w-3.5 h-3.5" />
                            {route}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-blue-800 text-xs leading-relaxed">
                        Bull Runner is USF's free shuttle service. Check the <span className="font-semibold">TransLoc</span> app for real-time bus tracking and schedules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* right sidebar */}
          <div className="space-y-5">

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 bg-[#006747]">
                <h3 className="text-white font-semibold" style={{ fontSize: '0.9rem' }}>Lot Information</h3>
              </div>
              <div className="p-5 space-y-4">
                {lot.floors && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-gray-800 text-sm font-medium">Levels</div>
                      <div className="text-gray-500 text-xs">{lot.floors} floors</div>
                    </div>
                  </div>
                )}
                {lot.hourlyRate != null && lot.hourlyRate > 0 && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-gray-800 text-sm font-medium">Hourly Rate</div>
                      <div className="text-gray-500 text-xs">${lot.hourlyRate.toFixed(2)} / hour</div>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-gray-800 text-sm font-medium">Location</div>
                    <div className="text-gray-500 text-xs">{lot.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-gray-800 text-sm font-medium">Occupancy</div>
                    <div className={`text-xs font-medium ${colors.badge} inline-block px-2 py-0.5 rounded-full mt-0.5`}>
                      {occupancyRate.toFixed(1)}% · {colors.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <h3 className="text-gray-800 font-semibold" style={{ fontSize: '0.9rem' }}>Amenities</h3>
              </div>
              <div className="p-5 space-y-2">
                {lot.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#006747] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <h3 className="text-gray-800 font-semibold" style={{ fontSize: '0.9rem' }}>Accepted Permits</h3>
              </div>
              <div className="p-5 space-y-2">
                {lot.permitTypes.map(p => (
                  <div key={p} className="flex items-center gap-3">
                    <span className={`${PERMIT_INFO[p].color} text-white text-xs px-2.5 py-1 rounded-full font-medium min-w-[44px] text-center`}>
                      {p}
                    </span>
                    <span className="text-gray-700 text-sm">{PERMIT_INFO[p].name}</span>
                  </div>
                ))}
              </div>
            </div>

            {lot.peakTimes && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <CalendarClock className="w-4 h-4 text-gray-600" />
                    <h3 className="text-gray-800 font-semibold" style={{ fontSize: '0.9rem' }}>Peak Times</h3>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">When this lot is typically full</p>
                </div>
                <div className="p-5">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-4">
                    <p className="text-gray-700 text-sm leading-relaxed">{lot.peakTimes}</p>
                  </div>
                  <div className="mt-3 flex items-start gap-2 text-gray-500 text-xs">
                    <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Plan ahead during peak hours to find parking more easily. Consider arriving early or using alternative lots.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-800 text-xs font-medium">Real-time Estimates</p>
                  <p className="text-amber-700 text-xs mt-0.5">Space counts are updated continuously and may vary by a few spaces.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer className="bg-[#006747] text-green-200 py-6 px-6 text-center text-xs">
        <p>© 2026 University of South Florida · Parking & Transportation Services</p>
        <p className="mt-1 text-green-300">Data refreshes automatically every 30 seconds</p>
      </footer>
    </div>
  );
}
