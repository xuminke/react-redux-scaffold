import 'whatwg-fetch';
import { fetchOptions, checkStatus, parseJSON, checkStatusForLogin } from '../utils/fetch';

export function getNotice() {
  const BASE_URL = '/api/system/notice';
  return fetch(BASE_URL, {
    ...fetchOptions(),
  }).then(checkStatus)
    .then(parseJSON)
    .then(json => json);
}

export function setNotice(params) {
  const BASE_URL = '/api/system/notice';
  return fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(params),
    ...fetchOptions(),
  }).then(checkStatus);
}

export function login(params) {
  const BASE_URL = '/api/system/login';
  return fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      user_id: params.userId,
      password: params.password,
    }),
    ...fetchOptions(),
  }).then(checkStatusForLogin);
}

export function logout() {
  const BASE_URL = '/api/system/logout';
  return fetch(BASE_URL, {
    method: 'DELETE',
    ...fetchOptions(),
  }).then(checkStatus)
    .then(parseJSON)
    .then(json => json);
}

export function getPasswordInfo() {
  const BASE_URL = `/api/system/users/password`;
  return fetch(BASE_URL, {
    ...fetchOptions(),
  }).then(checkStatus)
    .then(parseJSON)
    .then(json => json);
}

export function modifyPassword(params) {
  const BASE_URL = `/api/system/users/${params.userID}/password`;
  return fetch(BASE_URL, {
    method: 'PUT',
    body: JSON.stringify({
      nowPassword: params.nowPassword,
      newPassword: params.newPassword,
    }),
    ...fetchOptions(),
  }).then(checkStatus)
    .then(parseJSON)
    .then(json => json);
}

export function getCurrentRole(id) {
  const BASE_URL = `/api/system/roles/${id}`;
  return fetch(BASE_URL, {
    ...fetchOptions(),
  }).then(checkStatus)
    .then(parseJSON)
    .then(json => json);
}
