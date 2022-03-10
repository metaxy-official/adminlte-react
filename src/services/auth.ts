/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
import { removeWindowClass } from '@app/utils/helpers';
import { createService } from '../plugins/axios';

const baseURL = process.env.REACT_APP_GATEKEEPER_URL;

const instance = createService(baseURL);

// export const loginByAuth = async (email: string, password: string) => {
//   const token = await Gatekeeper.loginByAuth(email, password);
//   localStorage.setItem('token', token);
//   removeWindowClass('login-page');
//   removeWindowClass('hold-transition');
//   return token;
// };
export const login = async (email: string, password: string) => {
  const response = await instance.post('/auth/login', { email: email, password: password });
  localStorage.setItem('user', JSON.stringify(response?.data));
  localStorage.setItem('token', response?.data.tokens.access.token);
  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  return response
};
