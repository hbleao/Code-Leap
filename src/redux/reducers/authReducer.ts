import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: ''
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
    },
    logout: state => {
      state.username = '';
    }
  }
});

export const { login, logout } = authSlice.actions;
