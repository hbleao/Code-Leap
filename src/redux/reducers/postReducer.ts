import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    post: {
      id: 0,
      title: '',
      content: ''
    }
  },
  reducers: {
    setCurrentPostData: (state, action) => {
      state.post = action.payload;
    }
  }
});

export const { setCurrentPostData } = postSlice.actions;
