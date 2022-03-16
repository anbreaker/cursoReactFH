import { Routes, Route, Navigate } from 'react-router-dom';

import { CalendarPage } from '../pages/calendar/CalendarPage';

export const DashboardRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};
