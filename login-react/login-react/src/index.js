import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { applyMiddleware, createStore } from 'redux';
import combinedReducers from './reducers';
import logger from 'redux-logger';

import { Provider } from 'react-redux';


var store = createStore(combinedReducers, applyMiddleware(logger));

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);
