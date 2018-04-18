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
    next({
      type: successType,
      payload: response,
      ...meta,
    });
    return response;
  }).catch(error => {
    next({
      type: failureType,
      payload: error,
      ...meta,
    });
    return error;
  });
};

export default thunkDispatch;
