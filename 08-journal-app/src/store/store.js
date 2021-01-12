import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {authReducers} from '../reducers/authReducers';
import {uiReducer} from '../reducers/uiReducer';

const reducers = combineReducers({
  auth: authReducers,
  ui: uiReducer,
});

const middlewares = [thunk];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
