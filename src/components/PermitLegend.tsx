import { PERMIT_INFO, PermitType } from '../types/parking';

const PERMIT_CATEGORIES = [
  {
    label: 'Student & Resident',
    permits: ['S', 'R'] as PermitType[],
  },
  {
    label: 'Alumni & Park-n-Ride',
    permits: ['Y'] as PermitType[],
  },
  {
    label: 'Staff',
    permits: ['E', 'GZ'] as PermitType[],
  },
  {
    label: 'Visitor',
    permits: ['D'] as PermitType[],
  },
  {
    label: 'Moffitt Employees',
    permits: ['AG33', 'HE', 'AG42'] as PermitType[],
  },
];

export function PermitLegend() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 bg-[#006747]">
        <h3 className="text-white font-semibold" style={{ fontSize: '0.875rem' }}>Permit Guide</h3>
      </div>
      <div className="p-4 space-y-4">
        {PERMIT_CATEGORIES.map((cat) => (
          <div key={cat.label}>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">{cat.label}</p>
            <div className="space-y-1.5">
              {cat.permits.map((permitType) => (
                <div key={permitType} className="flex items-center gap-2">
                  <span className={`${PERMIT_INFO[permitType].color} text-white text-xs px-2 py-0.5 rounded font-medium min-w-[40px] text-center`}>
                    {permitType}
                  </span>
                  <span className="text-xs text-gray-600">{PERMIT_INFO[permitType].name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Occupancy Legend */}
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">How Full Is It?</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
              <span className="text-xs text-gray-600">Plenty of space — under 50% full</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0" />
              <span className="text-xs text-gray-600">Filling up — 50–85% full</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0" />
              <span className="text-xs text-gray-600">Almost gone — over 85% full</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
