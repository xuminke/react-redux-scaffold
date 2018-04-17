import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import './styles/index.less';
import Root from './containers/Root';
import RootReducer from './reducers';

const store = createStore(RootReducer);

render(<Root store={store} />, document.getElementById('root'));
