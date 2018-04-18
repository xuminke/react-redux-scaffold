import { handleActions } from 'redux-actions';

const defaultState = {
  counter: 10,
};
const demoReducer = handleActions({
  INCREASE: (state, action) => ({
    counter: state.counter + action.payload.amount,
  }),

  DECREASE: (state, action) => ({
    counter: state.counter - action.payload.amount,
  }),
}, defaultState);

export default demoReducer;
