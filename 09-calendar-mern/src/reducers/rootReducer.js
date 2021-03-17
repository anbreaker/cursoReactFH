import { combineReducers } from 'redux';
import { uiReducer } from './uiReduer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  // TODO: AuthReducer,
  // TODO: CalendarReducer,
});
