import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ParkingLotDetail } from '../types/parking';
import { parkingLots, getUpdatedParkingLots } from '../data/parkingLots';

interface ContextShape {
  lots: ParkingLotDetail[];
  lastRefreshed: Date;
  refreshData: () => void;
  isRefreshing: boolean;
}

const ParkingDataContext = createContext<ContextShape | undefined>(undefined);

export function ParkingDataProvider({ children }: { children: ReactNode }) {
  const [lots, setLots] = useState<ParkingLotDetail[]>(parkingLots);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  function doRefresh(prev: ParkingLotDetail[]) {
    const updated = getUpdatedParkingLots(prev);
    setLots(updated);
    setLastRefreshed(new Date());
  }

  // auto-refresh every 30s, skip when tab is hidden to save resources
  useEffect(() => {
    const tick = setInterval(() => {
      if (!document.hidden) setLots(prev => { doRefresh(prev); return prev; });
    }, 30000);

    const onVisible = () => {
      if (!document.hidden) setLots(prev => { doRefresh(prev); return prev; });
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      clearInterval(tick);
      document.removeEventListener('visibilitychange', onVisible);
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
  const ctx = useContext(ParkingDataContext);
  if (!ctx) throw new Error('useParkingData must be used inside ParkingDataProvider');
  return ctx;
}
