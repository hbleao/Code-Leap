import { configureStore } from '@reduxjs/toolkit';

import { authSlice, postSlice } from '../reducers';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    posts: postSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
