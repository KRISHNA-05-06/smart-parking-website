import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ParkingDataProvider } from './context/ParkingDataContext';

export default function App() {
  return (
    <ParkingDataProvider>
      <RouterProvider router={router} />
    </ParkingDataProvider>
  );
}