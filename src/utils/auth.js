import { getLocalToken } from './token';

export const loggedIn = () => {
  const token = getLocalToken();
  return !!token;
}
