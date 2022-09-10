import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Presentation } from './Presentation';

import { usePosts } from '@/hooks';

import { PostService } from '@/services';

import { RootState } from '@/redux/store';
import {
  closeDeleteModal,
  closeEditModal,
  setIsLoading
} from '@/redux/reducers/postReducer';

export const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const [fields, setFields] = useState({ title: '', content: '' });
  const [updatePostList, setUpdatePostList] = useState({});
  const {
    data,
    isLoading: isPostListLoading,
    setPagination,
    pagination
  } = usePosts(updatePostList);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const showPostList = data?.results?.length > 0 && !isPostListLoading;
  const isDisabled = !fields.title || !fields.content || isCreatingPost;

  const handleSubmit = async (event: FormEvent) => {
    try {
      setIsCreatingPost(true);
      event.preventDefault();

      const newPost = {
        username: state.auth.username,
        title: fields.title,
        content: fields.content
      };

      await PostService.create(newPost);
      setUpdatePostList(new Date());
    } catch (error) {
      console.error(error);
    } finally {
      setIsCreatingPost(false);
      setFields({ title: '', content: '' });
    }
  };

  const handleDeletePost = async () => {
    try {
      dispatch(setIsLoading(true));
      await PostService.delete(state.posts.post.id);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(closeDeleteModal());
      setUpdatePostList(new Date());
    }
  };

  const handleUpdatePost = async () => {
    try {
      dispatch(setIsLoading(true));
      await PostService.update(state.posts.post);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(closeEditModal());
      setUpdatePostList(new Date());
    }
  };

  return (
    <Presentation
      state={state}
      dispatch={dispatch}
      showPostList={showPostList}
      isDisabled={isDisabled}
      isPostLoading={isPostListLoading}
      isCreatingPost={isCreatingPost}
      fields={fields}
      setFields={setFields}
      data={data}
      pagination={pagination}
      setPagination={setPagination}
      handleDeletePost={handleDeletePost}
      handleUpdatePost={handleUpdatePost}
      handleSubmit={handleSubmit}
    />
  );
};
