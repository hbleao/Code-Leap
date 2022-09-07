import React from 'react';

import * as S from './styles';

import { Button, Heading, Post, TextareaField, TextField } from '@/components';
import { useFetch } from '@/hooks';
import { PostService } from '@/services';
import { PostDTO } from '@/DTOs/Post';

export const Posts = () => {
  const { data, isLoading } = useFetch(PostService.get);
  const showPostList = data?.results?.length > 0 && !isLoading;

  return (
    <S.Container>
      <S.Header>
        <Heading color="white">CodeLeap Network</Heading>
      </S.Header>
      <S.Content>
        <S.Form>
          <Heading>What’s on your mind?</Heading>
          <S.InputGroup>
            <TextField label="Title" placeholder="Your name" />
          </S.InputGroup>
          <S.InputGroup>
            <TextareaField rows={10} label="Content" placeholder="Jhon doe" />
          </S.InputGroup>
          <S.ButtonGroup>
            <Button>CREATE</Button>
          </S.ButtonGroup>
        </S.Form>

        <S.PostList>
          {showPostList &&
            data.results.map((post: PostDTO) => (
              <Post
                key={post.id}
                id={post.id}
                username={post.username}
                title={post.title}
                content={post.content}
                created_datetime={post.created_datetime}
                handleDelete={() => null}
                handleEdit={() => null}
              />
            ))}
        </S.PostList>
      </S.Content>
    </S.Container>
  );
};
