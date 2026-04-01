import { Link } from 'react-router';
import { Car, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <div className="w-16 h-16 bg-[#006747] rounded-2xl flex items-center justify-center mb-6">
        <Car className="w-9 h-9 text-white" />
      </div>
      <h1 className="text-gray-800 mb-2" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Page Not Found</h1>
      <p className="text-gray-500 text-sm text-center mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#006747] text-white px-5 py-2.5 rounded-lg hover:bg-[#005538] transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>
    </div>
  );
}
