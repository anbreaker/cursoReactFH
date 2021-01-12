import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {authReducers} from '../reducers/authReducers';

const reducers = combineReducers({
  auth: authReducers,
});

const middlewares = [thunk];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
