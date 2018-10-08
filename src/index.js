import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import thunkDispatch from './middleware/thunk-dispatch';
import Root from './containers/Root';
import RootReducer from './reducers';
import './styles/index.less';

const logger = createLogger();
const store = createStore(
  RootReducer,
  applyMiddleware(thunk, thunkDispatch, logger)
);

render(<Root store={store} />, document.getElementById('root'));
