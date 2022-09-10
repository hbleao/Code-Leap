import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from './authReducer';
import { postSlice } from './postReducer';

export const rootReducers = combineReducers({
  auth: authSlice.reducer,
  posts: postSlice.reducer
});
