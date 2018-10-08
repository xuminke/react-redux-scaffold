import { combineReducers } from 'redux';
import demo from './demo';
import demoAsync from './demoAsync';
import auth from './auth';

const rootReducer = combineReducers({
  // reducers
  demo,
  demoAsync,
  auth,
});

export default rootReducer;
