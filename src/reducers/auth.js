import { handleActions } from 'redux-actions';

const defaultState = {
  notice: {
    isFetching: false,
    payload: null,
    error: false,
  },
  token: {
    isFetching: false,
    payload: null,
    error: false,
  },
  password: {
    isFetching: false,
    payload: null,
    error: false,
  },
  operation: {
    isFetching: false,
    payload: null,
    error: false,
  },
  role: {
    isFetching: false,
    payload: null,
    error: false,
  }
};

const authReducer = handleActions({
  FETCH_NOTICE_REQUEST: (state, action) => ({
    ...state,
    notice: {
      ...defaultState.notice,
      isFetching: true,
    }
  }),
  FETCH_NOTICE_SUCCESS: (state, action) => ({
    ...state,
    notice: {
      isFetching: false,
      payload: action.payload,
      error: false,
    },
  }),
  FETCH_NOTICE_FAILURE: (state, action) => ({
    ...state,
    notice: {
      ...state.notice,
      isFetching: false,
      error: true,
    },
  }),
  USER_LOGIN_REQUEST: (state, action) => ({
    ...state,
    token: {
      ...defaultState.token,
      isFetching: true,
    }
  }),
  USER_LOGIN_SUCCESS: (state, action) => ({
    ...state,
    token: {
      isFetching: false,
      payload: action.payload,
      error: false,
    },
  }),
  USER_LOGIN_FAILURE: (state, action) => ({
    ...state,
    token: {
      ...state.token,
      isFetching: false,
      error: true,
    },
  }),
  USER_LOGOUT_REQUEST: (state, action) => ({
    ...state,
    token: {
      ...defaultState.token,
      isFetching: true,
    }
  }),
  USER_LOGOUT_SUCCESS: (state, action) => ({
    ...state,
    token: {
      isFetching: false,
      payload: null,
      error: false,
    },
  }),
  USER_LOGOUT_FAILURE: (state, action) => ({
    ...state,
    token: {
      isFetching: false,
      payload: null,
      error: true,
    },
  }),
  FETCH_PASSWORD_INFO_REQUEST: (state, action) => ({
    ...state,
    password: {
      ...defaultState.password,
      isFetching: true,
    }
  }),
  FETCH_PASSWORD_INFO_SUCCESS: (state, action) => ({
    ...state,
    password: {
      isFetching: false,
      payload: action.payload,
      error: false,
    },
  }),
  FETCH_PASSWORD_INFO_FAILURE: (state, action) => ({
    ...state,
    password: {
      ...state.password,
      isFetching: false,
      error: true,
    },
  }),
  MODIFY_PASSWORD_REQUEST: (state, action) => ({
    ...state,
    operation: {
      ...defaultState.operation,
      isFetching: true,
    }
  }),
  MODIFY_PASSWORD_SUCCESS: (state, action) => ({
    ...state,
    operation: {
      isFetching: false,
      payload: action.payload,
      error: false,
    },
  }),
  MODIFY_PASSWORD_FAILURE: (state, action) => ({
    ...state,
    operation: {
      ...state.operation,
      isFetching: false,
      error: true,
    },
  }),
  SET_NOTICE_REQUEST: (state) => ({
    ...state,
    operation: {
      ...defaultState.operation,
      isFetching: true,
    },
  }),
  SET_NOTICE_SUCCESS: (state) => ({
    ...state,
    operation: {
      ...defaultState.operation,
      isFetching: false,
      error: false,
    },
  }),
  SET_NOTICE_FAILURE: (state) => ({
    ...state,
    operation: {
      ...defaultState.operation,
      isFetching: false,
      error: true,
    },
  }),
  FETCH_CURRENT_ROLE_REQUEST: (state) => ({
    ...state,
    role: {
      ...state.role,
      isFetching: true,
    },
  }),
  FETCH_CURRENT_ROLE_SUCCESS: (state, action) => ({
    ...state,
    role: {
      payload: action.payload,
      isFetching: false,
      error: false,
    },
  }),
  FETCH_CURRENT_ROLE_FAILURE: (state) => ({
    ...state,
    role: {
      ...state.role,
      isFetching: false,
      error: true,
    },
  }),
}, defaultState);

export default authReducer;
