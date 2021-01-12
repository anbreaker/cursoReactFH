import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {authReducers} from '../reducers/authReducers';

const reducers = combineReducers({
  auth: authReducers,
});

export const store = createStore(reducers, composeWithDevTools());
