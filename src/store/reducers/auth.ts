/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  currentUser: any;
  user: any;
}

const user = JSON.parse(localStorage.getItem('user') || '{}');
const initialState: AuthState = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user'),

  currentUser: {
    email: user?.user?.email,
    picture: null
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.isLoggedIn = true;
      state.token = payload?.data.tokens.access.token;
      state.currentUser = {
        email: payload?.data.user.email,
        picture: null
      };
    },
    logoutUser: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.currentUser = {};
      state.isLoggedIn = false;
      state.token = null;
    },

  }
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
