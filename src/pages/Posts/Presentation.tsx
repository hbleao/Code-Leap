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

import {
  toggleDeleteModal,
  toggleEditModal
} from '@/redux/reducers/postReducer';

import { PresentationProps } from './types';

export const Presentation = ({
  showPostList,
  isDisabled,
  isPostLoading,
  isCreatingPost,
  fields,
  setFields,
  state,
  dispatch,
  data,
  handleSubmit,
  setPagination,
  pagination,
  handleUpdatePost,
  handleDeletePost
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
              value={fields.title}
              onChange={value =>
                setFields({
                  ...fields,
                  title: value.target.value
                })
              }
              autoFocus
              aria-required
            />
          </S.InputGroup>
          <S.InputGroup>
            <TextareaField
              label="Content (required)"
              value={fields.content}
              onChange={value =>
                setFields({
                  ...fields,
                  content: value.target.value
                })
              }
              rows={10}
              aria-required
            />
          </S.InputGroup>
          <S.ButtonGroup>
            <Button
              type="submit"
              isDisabled={isDisabled}
              isLoading={isCreatingPost}
            >
              CREATE
            </Button>
          </S.ButtonGroup>
        </S.Form>

        {showPostList && (
          <ErrorBoundary>
            <S.PostList>
              {data.results.map((post: PostDTO) => (
                <Post
                  key={post.id}
                  id={post.id}
                  username={post.username}
                  currentUsername={state.auth.username}
                  title={post.title}
                  content={post.content}
                  created_datetime={post.created_datetime}
                  handleDelete={postId =>
                    dispatch(toggleDeleteModal([postId, true]))
                  }
                  handleEdit={postParams => {
                    dispatch(toggleEditModal([postParams, true]));
                    setFields({ ...fields, ...postParams });
                  }}
                />
              ))}
            </S.PostList>
            <div>
              <Pagination
                activePage={pagination.activePage}
                total={data.count}
                totalPages={Math.round(data.count)}
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

        {isPostLoading && (
          <S.ShimmerContainer>
            {[1, 2, 3].map(item => (
              <Skeleton key={item} width={80} height={30} />
            ))}
          </S.ShimmerContainer>
        )}
      </S.Content>
      <Modal isOpen={state.posts.showDeleteModal}>
        <S.ModalTitle>Are you sure you want to delete this item ?</S.ModalTitle>
        <S.ModalContent>
          <Button
            isOutline
            onClick={() =>
              dispatch(
                toggleDeleteModal({
                  post: null,
                  showDeletePostModal: false
                })
              )
            }
          >
            cancel
          </Button>
          <Button
            isOutline
            loaderColor="black"
            onClick={handleDeletePost}
            isLoading={state.posts.isLoading}
          >
            Delete
          </Button>
        </S.ModalContent>
      </Modal>
      <Modal isOpen={state.posts.showEditModal} size="large">
        <S.ModalForm onSubmit={handleSubmit}>
          <Heading>What’s on your mind?</Heading>
          <S.InputGroup>
            <TextField
              label="Title (required)"
              placeholder="Your name"
              value={fields.title}
              onChange={value =>
                setFields({
                  ...fields,
                  title: value.target.value
                })
              }
              autoFocus
              aria-required
            />
          </S.InputGroup>
          <S.InputGroup>
            <TextareaField
              label="Content (required)"
              value={fields.content}
              onChange={value =>
                setFields({
                  ...fields,
                  content: value.target.value
                })
              }
              rows={5}
              aria-required
            />
          </S.InputGroup>
          <S.ButtonGroup>
            <Button
              type="submit"
              loaderColor="black"
              onClick={handleUpdatePost}
              isDisabled={isDisabled}
              isLoading={state.posts.isLoading}
            >
              Save
            </Button>
          </S.ButtonGroup>
        </S.ModalForm>
      </Modal>
    </S.Container>
  );
};
