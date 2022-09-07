import React from 'react';

import * as S from './styles';

import { Button, Heading, Post, TextareaField, TextField } from '@/components';

export const Posts = () => {
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
          <Post
            id={1234345645678}
            username={'@Henrique'}
            title={'How to create a component in react?'}
            content={
              'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            }
            created_datetime={'2022-09-06T04:11:13.301945Z'}
            handleDelete={() => null}
            handleEdit={() => null}
          />
          <Post
            id={1234345645678}
            username={'@Henrique'}
            title={'How to create a component in react?'}
            content={
              'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            }
            created_datetime={'2021-07-06T04:11:13.301945Z'}
            handleDelete={() => null}
            handleEdit={() => null}
          />
          <Post
            id={1234345645678}
            username={'@Henrique'}
            title={'How to create a component in react?'}
            content={
              'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            }
            created_datetime={'2022-09-06T04:11:13.301945Z'}
            handleDelete={() => null}
            handleEdit={() => null}
          />
        </S.PostList>
      </S.Content>
    </S.Container>
  );
};
