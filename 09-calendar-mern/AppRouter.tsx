import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/auth/LoginPage';
import { CalendarPage } from '../pages/calendar/CalendarPage';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRouter } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PublicRoute>
              <CalendarPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
