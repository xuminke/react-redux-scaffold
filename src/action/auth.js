import * as authAPI from '../request/auth';
import * as roleAPI from '../request/role';

export const getNotice = () => {
  return dispatch => dispatch({
    type: 'FETCH_NOTICE',
    payload: authAPI.getNotice(),
  });
};

export const setNotice = (param) => {
  return dispatch => dispatch({
    type: 'SET_NOTICE',
    payload: authAPI.setNotice(param),
  });
};

export const login = (params) => {
  return dispatch => dispatch({
    type: 'USER_LOGIN',
    payload: authAPI.login(params),
  });
};

export const logout = () => {
  return dispatch => dispatch({
    type: 'USER_LOGOUT',
    payload: authAPI.logout(),
  });
}

export const getPasswordInfo = (id) => {
  return dispatch => dispatch({
    type: 'FETCH_PASSWORD_INFO',
    payload: authAPI.getPasswordInfo(id),
  });
}

export const modifyPassword = params => {
  return dispatch => dispatch({
    type: 'MODIFY_PASSWORD',
    payload: authAPI.modifyPassword(params),
  });
}

export const getCurrentRole = (id) => {
  return dispatch => dispatch({
    type: 'FETCH_CURRENT_ROLE',
    payload: roleAPI.getRoleInfo(id),
  });
}
