import decode from 'jwt-decode';
import moment from 'moment';

const setToken = (token) => {
  window.localStorage.setItem('apiToken', token);
};

const getToken = () => window.localStorage.getItem('apiToken');

const getTokenPayload = () => {
  const token = getToken();
  return token && decode(token);
};

const isTokenValid = () => {
  const token = getTokenPayload();
  return Boolean(token && ((!token.exp) || (moment().unix() < token.exp)));
};

const removeToken = () => {
  window.localStorage.removeItem('apiToken');
};

export default {
  setToken,
  getToken,
  getTokenPayload,
  isTokenValid,
  removeToken,
};
