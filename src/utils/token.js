import jwtDecode from 'jwt-decode';

export const getLocalToken = () => {
  return localStorage.getItem('token');
}

export const setLocalToken = token => {
  localStorage.setItem('token', token);
}

export const clearLocalToken = () => {
  localStorage.removeItem('token');
}

export const decodeToken = encodedToken => {
  try {
    const data = jwtDecode(encodedToken) || {};
    return data;
  } catch (e) {
    return {};
  }
}

export const getUser = () => {
  const token = decodeToken(getLocalToken());
  console.log(token);
  return (token && token.user) || {};
}
