import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import store from './Redux'

import createSagaMiddleware from 'redux-saga';
import mySagas from './Sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

let createdStore = createStore(store, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySagas)

ReactDOM.render(
  <Provider store={ createdStore }>
    <App />
  </Provider>, document.getElementById('root'));
