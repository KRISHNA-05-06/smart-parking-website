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

  // Poll every 30 seconds, but skip when the tab is in the background
  useEffect(() => {
    const onVisibilityChange = () => {
      if (!document.hidden) {
        // User switched back to this tab — grab fresh data right away
        setLots(prev => getUpdatedParkingLots(prev));
        setLastRefreshed(new Date());
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    const timer = setInterval(() => {
      if (!document.hidden) {
        setLots(prev => getUpdatedParkingLots(prev));
        setLastRefreshed(new Date());
      }
    }, 30000);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  // Manual refresh — brief spinner so it feels responsive
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
  const ctx = useContext(ParkingDataContext);
  if (ctx === undefined) {
    throw new Error('useParkingData must be called inside a ParkingDataProvider');
  }
  return ctx;
}
