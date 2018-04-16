import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createStore } from 'redux';
import './styles/index.less';
import Root from './containers/Root';
import RootReducer from './reducers';

let store = createStore(RootReducer);

render(
  <Root store={store} />, 
  document.getElementById('root')
);