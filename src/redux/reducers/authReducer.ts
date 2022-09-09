import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '@Henrique'
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
    }
  }
});

export const { login } = authSlice.actions;
