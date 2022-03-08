import { useContext } from 'react';
import { AuthContext } from '../auth/authContext';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }: any) => {
  const { user }: any = useContext(AuthContext);

  return user.logged ? <Navigate to={'/search'} /> : children;
};
