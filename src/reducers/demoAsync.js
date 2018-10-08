import { handleActions } from 'redux-actions';

const defaultState = {
  isFetching: false,
  payload: {
    amount: 100,
  },
  error: false,
};

const demoAsyncReducer = handleActions({
  INCREASE_ASYNC_REQUEST: (state, action) => ({
    ...state,
    isFetching: true,
  }),
  INCREASE_ASYNC_SUCCESS: (state, action) => ({
    ...state,
    isFetching: false,
    payload: {
      amount: state.payload.amount + action.payload.data,
    },
  }),
  INCREASE_ASYNC_FAILURE: (state, action) => ({
    ...state,
    isFetching: false,
    payload: action.payload,
    error: true,
  }),
  DECREASE_ASYNC_REQUEST: (state, action) => ({
    ...state,
    isFetching: true,
  }),
  DECREASE_ASYNC_SUCCESS: (state, action) => ({
    ...state,
    isFetching: false,
    payload: {
      amount: state.payload.amount - action.payload.data,
    },
  }),
  DECREASE_ASYNC_FAILURE: (state, action) => ({
    ...state,
    isFetching: false,
    payload: action.payload,
    error: true,
  }),
}, defaultState);

export default demoAsyncReducer;
