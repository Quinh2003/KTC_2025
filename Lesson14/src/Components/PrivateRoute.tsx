// src/components/PrivateRoute.tsx
import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useAuthStore } from '../TaskManagement/useAuthStore';

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const user = useAuthStore((state: { loggedInUser: any; }) => state.loggedInUser);
  return user ? <>{children}</> : <Navigate to="/login" replace />;
}