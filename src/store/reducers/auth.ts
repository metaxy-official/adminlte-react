/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  currentUser: any;
}


const initialState: AuthState = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  currentUser: {
    email: '',
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      localStorage.setItem('token', payload?.tokens.access.token);
      state.isLoggedIn = true;
      state.token = payload?.tokens.access.token;
      state.currentUser.email = payload?.user.email;
    },
    logoutUser: (state) => {
      localStorage.removeItem('token');
      state.currentUser = {};
      state.isLoggedIn = false;
      state.token = null;
    },

  }
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
