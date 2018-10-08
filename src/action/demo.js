import { createActions } from 'redux-actions';

export const { increase, decrease } = createActions({
  INCREASE: (amount = 1) => ({ amount }),
  DECREASE: (amount = 1) => ({ amount }),
});
