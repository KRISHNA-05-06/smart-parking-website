import { Link } from 'react-router';
import { MapPin, Clock, ChevronRight, Car } from 'lucide-react';
import { ParkingLot, PERMIT_INFO, getOccupancyStatus, getStatusColors } from '../types/parking';

interface Props {
  lot: ParkingLot;
}

export function ParkingLotCard({ lot }: Props) {
  const occupancyRate = ((lot.totalSpaces - lot.availableSpaces) / lot.totalSpaces) * 100;
  const availabilityPct = (lot.availableSpaces / lot.totalSpaces) * 100;
  const status = getOccupancyStatus(occupancyRate);
  const colors = getStatusColors(status);

  const bannerBg =
    status === 'good' ? 'bg-green-500' :
    status === 'moderate' ? 'bg-orange-500' :
    'bg-red-500';

  const numColor =
    status === 'good' ? 'text-green-600' :
    status === 'moderate' ? 'text-orange-600' :
    'text-red-600';

  return (
    <Link to={`/lot/${lot.id}`} className="block group">
      <div className={`bg-white rounded-xl border-2 ${colors.border} overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>

        <div className={`px-4 py-2 flex items-center justify-between ${bannerBg}`}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-medium tracking-wide uppercase">{colors.label}</span>
          </div>
          <span className="text-white text-xs opacity-80">{occupancyRate.toFixed(0)}% full</span>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 min-w-0 pr-2">
              <h3 className="text-gray-900 leading-tight mb-1 truncate" style={{ fontSize: '1rem', fontWeight: 600 }}>
                {lot.name}
              </h3>
              <div className="flex items-center text-gray-500 gap-1">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-xs truncate">{lot.location}</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className={`text-2xl font-bold ${numColor}`}>{lot.availableSpaces}</div>
              <div className="text-xs text-gray-500">of {lot.totalSpaces}</div>
            </div>
          </div>

          {/* availability bar */}
          <div className="mb-4">
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${colors.bar}`}
                style={{ width: `${availabilityPct}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>{lot.availableSpaces} available</span>
              <span>{lot.totalSpaces} total</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Permits Accepted</p>
            <div className="flex flex-wrap gap-1.5">
              {lot.permitTypes.map(p => (
                <span key={p} className={`${PERMIT_INFO[p].color} text-white text-xs px-2.5 py-0.5 rounded-full font-medium`}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1 text-gray-400">
              <Clock className="w-3 h-3" />
              <span className="text-xs">
                {new Date(lot.lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#006747] group-hover:gap-2 transition-all">
              <span className="text-xs font-medium">View Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
