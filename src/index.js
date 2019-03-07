import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './Redux'
import { actions as PostsActions } from './Redux/Posts'

let createdStore = createStore(store)

ReactDOM.render(
  <Provider store={ createdStore }>
    <App />
  </Provider>, document.getElementById('root'));
