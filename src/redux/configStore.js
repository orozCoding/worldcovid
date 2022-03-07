import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { countriesReducer } from './countries/countries';
import { worldReducer } from './world/world';

const reducer = combineReducers({
  countries: countriesReducer,
  world: worldReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;