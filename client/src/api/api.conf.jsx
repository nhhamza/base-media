export const isLocalMode = process.env.REACT_APP_ENV === 'local';
export const API_ROOT = isLocalMode
  ? 'http://localhost:5000/api/'
  : 'http://remote-server';
