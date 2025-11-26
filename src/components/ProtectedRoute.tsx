import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { adminAuth } from '../lib/adminAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await adminAuth.isAuthenticated();
      setIsAuthenticated(authenticated);
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="bg-slate-50">
        <div >
          <div ></div>
          <p >验证身份中...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/adsadmin" replace />;
  }

  return <>{children}</>;
}
