import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    showDeleteModal: false,
    showEditModal: false,
    isLoading: false,
    post: {
      id: 0,
      title: '',
      content: ''
    }
  },
  reducers: {
    toggleEditModal: (state, action) => {
      state.post = action.payload[0];
      state.showEditModal = action.payload[1];
    },
    toggleDeleteModal: (state, action) => {
      state.post.id = action.payload[0];
      state.showDeleteModal = action.payload[1];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    closeDeleteModal: state => {
      state.showDeleteModal = false;
      state.isLoading = false;
    },
    closeEditModal: state => {
      state.showEditModal = false;
      state.isLoading = false;
    }
  }
});

export const {
  toggleEditModal,
  toggleDeleteModal,
  setIsLoading,
  closeDeleteModal,
  closeEditModal
} = postSlice.actions;
