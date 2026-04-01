// permit types used across the app
export type PermitType =
  | 'S' | 'R' | 'Y' | 'E' | 'GZ' | 'D'
  | 'AG33' | 'HE' | 'AG42'
  | 'GZ01' | 'GZ02' | 'GZ08' | 'GZ09' | 'GZ33' | 'GZ36' | 'GZ42'
  | 'WB';

export interface ParkingLot {
  id: string;
  name: string;
  location: string;
  totalSpaces: number;
  availableSpaces: number;
  permitTypes: PermitType[];
  coordinates?: { lat: number; lng: number };
  lastUpdated: string;
}

export interface PermitAvailability {
  permitType: PermitType;
  total: number;
  available: number;
}

// extends base lot with the extra detail fields we need for the detail page
export interface ParkingLotDetail extends ParkingLot {
  permitAvailability: PermitAvailability[];
  floors?: number;
  hourlyRate?: number;
  amenities: string[];
  lotNumber?: string;
  peakTimes?: string;
  alternativeTransportation?: {
    nearestStop: string;
    weekdayRoutes: string[];
    weekendRoutes: string[];
  };
}

export const PERMIT_INFO: Record<PermitType, {
  name: string;
  description: string;
  color: string;
  bgLight: string;
  textColor: string;
}> = {
  S: {
    name: 'Student',
    description: 'For registered USF students',
    color: 'bg-blue-600',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  R: {
    name: 'Resident',
    description: 'For on-campus residents',
    color: 'bg-violet-600',
    bgLight: 'bg-violet-50',
    textColor: 'text-violet-700',
  },
  Y: {
    name: 'Park-n-Ride / Alumni',
    description: 'Park-n-Ride and Alumni parking',
    color: 'bg-emerald-600',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-700',
  },
  E: {
    name: 'Staff',
    description: 'For USF staff members',
    color: 'bg-teal-600',
    bgLight: 'bg-teal-50',
    textColor: 'text-teal-700',
  },
  GZ: {
    name: 'Gold Zone Staff',
    description: 'Premium gold zone staff parking',
    color: 'bg-amber-600',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-700',
  },
  GZ01: { name: 'Gold Zone 01', description: 'Gold zone staff parking - Zone 01', color: 'bg-amber-600', bgLight: 'bg-amber-50', textColor: 'text-amber-700' },
  GZ02: { name: 'Gold Zone 02', description: 'Gold zone staff parking - Zone 02', color: 'bg-amber-600', bgLight: 'bg-amber-50', textColor: 'text-amber-700' },
  GZ08: { name: 'Gold Zone 08', description: 'Gold zone staff parking - Zone 08', color: 'bg-amber-600', bgLight: 'bg-amber-50', textColor: 'text-amber-700' },
  GZ09: { name: 'Gold Zone 09', description: 'Gold zone staff parking - Zone 09', color: 'bg-amber-600', bgLight: 'bg-amber-50', textColor: 'text-amber-700' },
  GZ33: { name: 'Gold Zone 33', description: 'Gold zone staff parking - Zone 33', color: 'bg-amber-600', bgLight: 'bg-amber-50', textColor: 'text-amber-700' },
  GZ36: { name: 'Gold Zone 36', description: 'Gold zone staff parking - Zone 36', color: 'bg-amber-600', bgLight: 'bg-amber-50', textColor: 'text-amber-700' },
  GZ42: { name: 'Gold Zone 42', description: 'Gold zone staff parking - Zone 42', color: 'bg-amber-600', bgLight: 'bg-amber-50', textColor: 'text-amber-700' },
  D: {
    name: 'Daily / Visitor',
    description: 'Daily and visitor parking',
    color: 'bg-orange-500',
    bgLight: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
  AG33: { name: 'Moffitt Employee (AG33)', description: 'Moffitt Cancer Center employee', color: 'bg-red-600', bgLight: 'bg-red-50', textColor: 'text-red-700' },
  HE:   { name: 'Moffitt Employee (HE)',   description: 'Moffitt Cancer Center employee', color: 'bg-pink-600', bgLight: 'bg-pink-50', textColor: 'text-pink-700' },
  AG42: { name: 'Moffitt Employee (AG42)', description: 'Moffitt Cancer Center employee', color: 'bg-rose-600', bgLight: 'bg-rose-50', textColor: 'text-rose-700' },
  WB: {
    name: 'White Badge',
    description: 'White badge parking permit',
    color: 'bg-gray-600',
    bgLight: 'bg-gray-50',
    textColor: 'text-gray-700',
  },
};

export function getOccupancyStatus(rate: number): 'good' | 'moderate' | 'critical' {
  if (rate >= 85) return 'critical';
  if (rate >= 50) return 'moderate';
  return 'good';
}

export function getStatusColors(status: 'good' | 'moderate' | 'critical') {
  const map = {
    good:     { bar: 'bg-green-500',  border: 'border-green-400',  badge: 'bg-green-100 text-green-800',   dot: 'bg-green-500',  label: 'Available'   },
    moderate: { bar: 'bg-orange-500', border: 'border-orange-400', badge: 'bg-orange-100 text-orange-800', dot: 'bg-orange-500', label: 'Filling Up'  },
    critical: { bar: 'bg-red-500',    border: 'border-red-400',    badge: 'bg-red-100 text-red-800',       dot: 'bg-red-500',    label: 'Nearly Full' },
  };
  return map[status];
}
