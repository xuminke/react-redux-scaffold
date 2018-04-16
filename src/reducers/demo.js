import {
  INCREASE,
  DECREASE,
} from '../constants/demo';
import { handleActions, combineActions } from 'redux-actions';
const defaultState = {
  counter: 10,
};
const demoReducer = handleActions({
  INCREMENT: (state, action) => ({
    counter: state.counter + action.payload,
  }),

  DECREMENT: (state, action) => ({
    counter: state.counter - action.payload,
  })
}, defaultState);

export default demoReducer;