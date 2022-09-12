import React, { FormEvent, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { Presentation } from './Presentation';

import { usePosts } from '@/hooks';

import { PostService } from '@/services';

import { RootState } from '@/redux/store';

import { initialState } from '@/constants/pages';

import { postsReducer } from './usePostReducer';

export const Posts = () => {
  const reduxDispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state);
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const {
    data: postList,
    isLoading: isPostListLoading,
    setPagination,
    pagination
  } = usePosts(state.updatePostList);
  const isDisableButtonCreatePost =
    !state.title || !state.content || state.isCreatingPost;
  const isDisableButtonUpdatePost =
    !reduxState.posts.post.title ||
    !reduxState.posts.post.content ||
    state.isUpdatingPost;

  const handleSubmit = async (event: FormEvent) => {
    try {
      dispatch({ type: 'CreatePost' });
      event.preventDefault();

      const newPost = {
        username: reduxState.auth.username,
        title: state.title,
        content: state.content
      };

      await PostService.create(newPost);
      toast.success('Uhull..., Post created!', {
        position: 'top-right',
        style: {
          fontSize: 16
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({ type: 'PostCreated' });
    }
  };

  const handleUpdatePost = async () => {
    try {
      dispatch({ type: 'UpdatePost' });
      await PostService.update(reduxState.posts.post);
      toast.success('Uhull..., Post Updatet!', {
        position: 'top-right',
        style: {
          fontSize: 16
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({ type: 'PostUpdated' });
      dispatch({ type: 'setShowEditModal', payload: false });
    }
  };

  const handleDeletePost = async () => {
    try {
      dispatch({ type: 'DeletePost' });
      await PostService.delete(reduxState.posts.post.id);
      toast.success('Uhull..., Post Deleted!', {
        position: 'top-right',
        style: {
          fontSize: 16
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({ type: 'PostDeleted' });
      dispatch({ type: 'setShowDeleteModal', payload: false });
    }
  };

  return (
    <Presentation
      reduxState={reduxState}
      reduxDispatch={reduxDispatch}
      state={state}
      dispatch={dispatch}
      postList={postList}
      isDisableButtonCreatePost={isDisableButtonCreatePost}
      isDisableButtonUpdatePost={isDisableButtonUpdatePost}
      isPostListLoading={isPostListLoading}
      pagination={pagination}
      setPagination={setPagination}
      handleDeletePost={handleDeletePost}
      handleUpdatePost={handleUpdatePost}
      handleSubmit={handleSubmit}
    />
  );
};
