import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { LotDetail } from './pages/LotDetail';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  { path: '/',          Component: Home },
  { path: '/lot/:lotId', Component: LotDetail },
  { path: '*',          Component: NotFound },
]);
