import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, isAuthenticated }: any) => {
  // redirect...
  return isAuthenticated ? children : <Navigate to="/login" />;
};
