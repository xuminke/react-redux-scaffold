import 'whatwg-fetch';
import { paramToQuery, fetchOptions, checkStatus, parseJSON } from '../utils/fetch';

const ROLE_URL = '/api/system/roles';
//const ROLE_URL = '/api/roles';

export function getRoleList() {
  //const url = '/api/roles';
  return fetch(ROLE_URL, {
    ...fetchOptions(),
  }).then(checkStatus)
    .then(parseJSON)
    .then(json => json);
}

export function getRoleInfo(id) {
  const url = `${ROLE_URL}/${id}`;
  //const url = `/api/roles/${id}`;
  return fetch(url, {
    ...fetchOptions(),
  }).then(checkStatus)
    .then(parseJSON)
    .then(json => json);
}

export function addRole(params) {
  return fetch(ROLE_URL, {
    method: 'POST',
    body: JSON.stringify(params.body),
    ...fetchOptions(),
  }).then(checkStatus);
}

export function editRole(params) {
  const url = `${ROLE_URL}/${params.id}`;
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(params.body),
    ...fetchOptions(),
  }).then(checkStatus);
}

export function deleteRole(ids) {
  return fetch(ROLE_URL, {
    method: 'DELETE',
    body: JSON.stringify(ids),
    ...fetchOptions(),
  }).then(checkStatus);
}
