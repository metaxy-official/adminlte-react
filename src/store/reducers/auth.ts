/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  currentUser: any;
  user: any;
}

const user = JSON.parse(localStorage.getItem('user') || '{}');
console.log("🚀 ~ file: auth.ts ~ line 12 ~ user", user)

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
      localStorage.setItem('token', payload);
      state.isLoggedIn = true;
      state.token = payload;
    },
    logoutUser: (state) => {
      localStorage.removeItem('token');
      state.currentUser = {};
      state.isLoggedIn = false;
      state.token = null;
    },
    loadUser: (state, { payload }) => {
      state.currentUser = payload;
    }
  }
});

export const { loginUser, logoutUser, loadUser } = authSlice.actions;

export default authSlice.reducer;
