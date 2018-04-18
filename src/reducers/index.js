import { combineReducers } from 'redux';
import demo from './demo';
import demoAsync from './demoAsync';

const rootReducer = combineReducers({
  // reducers
  demo,
  demoAsync,
});

export default rootReducer;
