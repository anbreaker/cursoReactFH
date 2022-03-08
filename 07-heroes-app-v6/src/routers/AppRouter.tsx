import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../components/login/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path="/*" element={<DashboardRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
