// src/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import numberReducer from './reducers/numberReducer';

const rootReducer = combineReducers({
  number: numberReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
