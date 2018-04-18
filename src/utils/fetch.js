import querystring from 'query-string';

export function paramToQuery(url, params) {
  if (!Object.keys(params).length) {
    return url;
  }

  return `${url}?${querystring.stringify(params)}`;
}

export function fetchOptions(headers = {}) {
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'X-ApiAuth-Token': getToken(),
      ...headers,
    },
    credentials: 'same-origin',
  };
}
