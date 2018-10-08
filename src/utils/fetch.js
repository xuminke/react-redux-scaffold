import querystring from 'qs';
import { clearLocalToken, getLocalToken } from './token';

export const paramToQuery = (url, params) => {
  if (!Object.keys(params).length) {
    return url;
  }

  return `${url}?${querystring.stringify(params)}`;
}

export const fetchOptions = (headers = {}) => {
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-ApiAuth-Token': getLocalToken(),
      ...headers,
    },
    credentials: 'same-origin',
  };
}

export const checkStatus = response => {
  if(response.ok) {
    return response;
  } else {
    if(response.status === 401) {
      clearLocalToken();
      setTimeout(() => { window.location.href = '/' }, 3000);
    }
    const error = new Error(response.statusText)
    error.response = response.json();
    throw error;
  }
}

export const parseJSON = response => {
  return response.json();
}

//special logic for login api
export const checkStatusForLogin = response => {
  if(response.ok) {
    if(response.status === 207){
      return response;
    } else {
      return response.json().then(json => json);
    }
  } else {
    if(response.status === 401) {
      clearLocalToken();
    }
    const error = new Error(response.statusText)
    error.response = response.json();
    throw error;
  }
}
