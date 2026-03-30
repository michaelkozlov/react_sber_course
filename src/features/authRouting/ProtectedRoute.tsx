import type { FC, PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from './useAuth';

export const ProtectedRoute: FC<PropsWithChildren> = () => {
 const {isAuthenticated} = useAuth();

 console.log(isAuthenticated);
 

 if (!isAuthenticated) {
   return <Navigate to="/login" replace />;
 }

 return <Outlet />
}