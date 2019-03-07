import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './Redux'

ReactDOM.render(
  <Provider store={ createStore(store) }>
    <App />
  </Provider>, document.getElementById('root'));
