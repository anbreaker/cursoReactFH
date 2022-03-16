import { Provider } from 'react-redux';
import './styles/components/app.scss';

import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
