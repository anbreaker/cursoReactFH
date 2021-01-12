import {createStore, combineReducers} from 'redux';
import {authReducers} from '../reducers/authReducers';

const reducers = combineReducers({
  auth: authReducers,
});

export const store = createStore(reducers);
