import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { parkingLots, getUpdatedParkingLots } from '../data/parkingLots';
import { ParkingLotDetail } from '../types/parking';

interface ParkingDataContextType {
  lots: ParkingLotDetail[];
  lastRefreshed: Date;
  refreshData: () => void;
  isRefreshing: boolean;
}

const ParkingDataContext = createContext<ParkingDataContextType | undefined>(undefined);

export function ParkingDataProvider({ children }: { children: ReactNode }) {
  const [lots, setLots] = useState<ParkingLotDetail[]>(parkingLots);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Auto-refresh every 30 seconds, but only when tab is visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Refresh data when tab becomes visible again
        setLots(prev => getUpdatedParkingLots(prev));
        setLastRefreshed(new Date());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const interval = setInterval(() => {
      if (!document.hidden) {
        setLots(prev => getUpdatedParkingLots(prev));
        setLastRefreshed(new Date());
      }
    }, 30000);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const refreshData = () => {
    setIsRefreshing(true);
    setLots(prev => getUpdatedParkingLots(prev));
    setLastRefreshed(new Date());
    setTimeout(() => setIsRefreshing(false), 700);
  };

  return (
    <ParkingDataContext.Provider value={{ lots, lastRefreshed, refreshData, isRefreshing }}>
      {children}
    </ParkingDataContext.Provider>
  );
}

export function useParkingData() {
  const context = useContext(ParkingDataContext);
  if (context === undefined) {
    throw new Error('useParkingData must be used within a ParkingDataProvider');
  }
  return context;
}
