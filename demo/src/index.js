import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import combineReducers from './reducers'
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';
var store = createStore(combineReducers, applyMiddleware(logger));
//var store = createStore(combineReducers);

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);
