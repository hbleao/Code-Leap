import React from 'react';

import * as S from './styles';

import { PostDTO } from '@/DTOs/Post';

import {
  Button,
  ErrorBoundary,
  Heading,
  Modal,
  Pagination,
  Post,
  Skeleton,
  TextareaField,
  TextField
} from '@/components';

import { setCurrentPostData } from '@/redux/reducers/postReducer';

import { PresentationProps } from './types';

export const Presentation = ({
  reduxState,
  reduxDispatch,
  postList,
  state,
  dispatch,
  isDisableButtonCreatePost,
  isDisableButtonUpdatePost,
  isPostListLoading,
  pagination,
  setPagination,
  handleDeletePost,
  handleUpdatePost,
  handleSubmit
}: PresentationProps) => {
  return (
    <S.Container>
      <S.Header>
        <Heading color="white">CodeLeap Network</Heading>
      </S.Header>
      <S.Content>
        <S.Form onSubmit={handleSubmit}>
          <Heading>What’s on your mind?</Heading>
          <S.InputGroup>
            <TextField
              label="Title (required)"
              placeholder="Your name"
              value={state.title}
              onChange={e =>
                dispatch({ type: 'setTitle', payload: e.target.value })
              }
              autoFocus
              aria-required
            />
          </S.InputGroup>
          <S.InputGroup>
            <TextareaField
              label="Content (required)"
              value={state.content}
              onChange={e =>
                dispatch({ type: 'setContent', payload: e.target.value })
              }
              rows={10}
              aria-required
            />
          </S.InputGroup>
          <S.ButtonGroup>
            <Button
              type="submit"
              isDisabled={isDisableButtonCreatePost}
              isLoading={state.isCreatingPost}
            >
              Create
            </Button>
          </S.ButtonGroup>
        </S.Form>

        {postList?.results?.length > 0 && !isPostListLoading && (
          <ErrorBoundary>
            <S.PostList>
              {postList.results.map((post: PostDTO) => (
                <Post
                  key={post.id}
                  id={post.id}
                  username={post.username}
                  currentUsername={reduxState.auth.username}
                  title={post.title}
                  content={post.content}
                  created_datetime={post.created_datetime}
                  handleDelete={postParams => {
                    reduxDispatch(setCurrentPostData(postParams));
                    dispatch({ type: 'setShowDeleteModal', payload: true });
                  }}
                  handleEdit={postParams => {
                    reduxDispatch(setCurrentPostData(postParams));
                    dispatch({ type: 'setShowEditModal', payload: true });
                  }}
                />
              ))}
            </S.PostList>
            <div>
              <Pagination
                activePage={pagination.activePage}
                total={postList.count}
                totalPages={Math.round(postList.count)}
                onClick={page => {
                  setPagination({
                    ...pagination,
                    offset: page * 10,
                    activePage: page
                  });
                }}
              />
            </div>
          </ErrorBoundary>
        )}

        {isPostListLoading && (
          <S.ShimmerContainer>
            {[1, 2, 3].map(item => (
              <Skeleton key={item} width={80} height={30} />
            ))}
          </S.ShimmerContainer>
        )}
      </S.Content>
      <Modal isOpen={state.showDeleteModal} size="large">
        <S.ModalTitle>Are you sure you want to delete this item ?</S.ModalTitle>
        <S.ModalContent>
          <Button
            tabIndex={0}
            type="button"
            isOutline
            onClick={() =>
              dispatch({ type: 'setShowDeleteModal', payload: false })
            }
          >
            Cancel
          </Button>
          <Button
            tabIndex={0}
            isOutline
            loaderColor="black"
            onClick={handleDeletePost}
            isLoading={state.isDeletingPost}
          >
            Delete
          </Button>
        </S.ModalContent>
      </Modal>

      <Modal isOpen={state.showUpdateModal} size="large">
        <S.ModalForm onSubmit={handleSubmit}>
          <Heading>What’s on your mind?</Heading>
          <S.InputGroup>
            <TextField
              label="Title (required)"
              placeholder="Your name"
              value={reduxState.posts.post.title}
              onChange={e =>
                reduxDispatch(
                  setCurrentPostData({
                    ...reduxState.posts.post,
                    title: e.target.value
                  })
                )
              }
              autoFocus
              aria-required
            />
          </S.InputGroup>
          <S.InputGroup>
            <TextareaField
              label="Content (required)"
              value={reduxState.posts.post.content}
              onChange={e =>
                reduxDispatch(
                  setCurrentPostData({
                    ...reduxState.posts.post,
                    content: e.target.value
                  })
                )
              }
              rows={5}
              aria-required
            />
          </S.InputGroup>
          <S.ModalContent>
            <Button
              tabIndex={0}
              type="button"
              isOutline
              onClick={() =>
                dispatch({ type: 'setShowEditModal', payload: false })
              }
            >
              Cancel
            </Button>
            <Button
              tabIndex={0}
              type="button"
              onClick={handleUpdatePost}
              isDisabled={isDisableButtonUpdatePost}
              isLoading={state.isUpdatingPost}
            >
              Save
            </Button>
          </S.ModalContent>
        </S.ModalForm>
      </Modal>
    </S.Container>
  );
};
