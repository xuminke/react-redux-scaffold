import { createActions } from 'redux-actions';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  INCREASE,
  DECREASE,
} from '../constants/demo';


export const { increment, decrement } = createActions({
  INCREASE: (amount = 1) => ({ amount }),
  DECREASE: (amount = 1) => ({ amount }),
});

