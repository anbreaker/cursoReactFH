import { combineReducers } from 'redux';

import { calendarReducer } from './calendarReducer';
import { uiReducer } from './uiReduer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
  // TODO: AuthReducer,
});
