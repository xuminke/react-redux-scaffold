import * as demoAsyncAPI from '../request/demoAsync';

export const increaseAsync = (params) => {
  return dispatch => dispatch({
    type: 'INCREASE_ASYNC',
    payload: demoAsyncAPI.increaseAsync(params),
    meta: undefined,
  });
}

export const decreaseAsync = (params) => {
  return dispatch => dispatch({
    type: 'DECREASE_ASYNC',
    payload: demoAsyncAPI.decreaseAsync(params),
    meta: undefined,
  });
}