import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import './styles/index.less';
import Root from './containers/Root';
import RootReducer from './reducers';

const logger = createLogger();
const store = createStore(
  RootReducer,
  applyMiddleware(logger)
);

render(<Root store={store} />, document.getElementById('root'));
