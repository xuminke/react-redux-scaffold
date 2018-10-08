import { notification } from 'antd';
import { requestMessage } from '../locale/message';

const thunkDispatch = store => next => action => {
  const isPromise = obj => obj && typeof obj.then === 'function';
  const { type, payload, meta } = action;
  // sync action
  if (!(payload && isPromise(payload))) {
    return next(action);
  }

  const requestType = `${type}_REQUEST`;
  const successType = `${type}_SUCCESS`;
  const failureType = `${type}_FAILURE`;
  // dispatch request action
  next({
    type: requestType,
    ...meta,
  });

  return payload.then(response => {
    if(requestMessage[successType]) {
      notification.success({
        message: requestMessage[successType],
      });
    }
    next({
      type: successType,
      payload: response,
      ...meta,
    });
    return response;
  }).catch(error => {
    isPromise(error.response) && error.response.then(body => {
      if(body.message) {
        notification.error({
          message: Array.isArray(body.message) ? body.message[0] : body.message,
        });
      } else if(requestMessage[failureType]) {
        notification.error({
          message: requestMessage[failureType],
        });
      }
    });
    next({
      type: failureType,
      payload: error,
      ...meta,
    });
    return error;
  });
};

export default thunkDispatch;
