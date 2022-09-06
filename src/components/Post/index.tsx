import React from 'react';
import { TrashBin } from '@styled-icons/ionicons-solid/TrashBin';

import * as S from './styles';
import { PostProps } from './types';

import { Heading } from '../Heading';
import { Button } from '../Button';

export const Post = ({
  id,
  username,
  title,
  content,
  created_datetime,
  handleDelete,
  handleEdit
}: PostProps) => {
  return (
    <S.Container>
      <S.Header>
        <Heading color="white">{title}</Heading>
        <S.ButtonGroup>
          <Button
            onClick={() => handleDelete(id)}
            icon={<TrashBin />}
            aria-label="Delete post"
          />
          <Button
            onClick={() => handleEdit(id)}
            icon={<TrashBin />}
            aria-label="Edit post"
          />
        </S.ButtonGroup>
      </S.Header>
      <S.WrapperContent>
        <S.TitleContent>
          <S.Username>{username}</S.Username>
          <S.DateTime>{created_datetime}</S.DateTime>
        </S.TitleContent>

        <S.Content>{content}</S.Content>
      </S.WrapperContent>
    </S.Container>
  );
};
