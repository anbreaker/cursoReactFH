import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LoginPage } from '../pages/auth/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRouter } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';
import { startChecking } from '../store/actions/auth';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { checking, uid } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h4>Espere...</h4>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={!!uid}>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={!!uid}>
              <DashboardRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
