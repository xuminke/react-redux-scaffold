import 'whatwg-fetch';
import { paramToQuery, fetchOptions } from '../utils/fetch';

export function increaseAsync(params = {}) {
  const BASE_URL = '/api/increase';
  const url = paramToQuery(BASE_URL, params);
  return fetch(url, {
    ...fetchOptions(),
  }).then(response => response.json())
    .then(json => json)
    .catch(error => console.log(error));
}

export function decreaseAsync(params = {}) {
  const BASE_URL = '/api/decrease';
  const url = paramToQuery(BASE_URL, params);
  return fetch(url, {
    ...fetchOptions(),
  }).then(response => response.json())
    .then(json => json)
    .catch(error => console.log(error));
}
