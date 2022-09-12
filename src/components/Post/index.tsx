import React from 'react';
import { formatDistance } from 'date-fns';

import SvgDelete from '@/assets/icon-delete.svg';
import SvgEdit from '@/assets/icon-edit.svg';

import * as S from './styles';
import { PostProps } from './types';

import { Heading } from '../Heading';
import { Button } from '../Button';
import { truncateText } from '@/utils';

export const Post = ({
  id,
  currentUsername,
  username,
  title,
  content,
  created_datetime,
  handleDelete,
  handleEdit
}: PostProps) => {
  const period = formatDistance(new Date(created_datetime), new Date(), {
    addSuffix: true
  });
  const isOwner = username === currentUsername;

  return (
    <S.Container>
      <S.Header>
        <Heading color="white">{truncateText(title, 45)}</Heading>
        {isOwner && (
          <S.ButtonGroup>
            <Button
              tabIndex={0}
              onClick={() => handleDelete({ id, title, content })}
              icon={<SvgDelete />}
              aria-label="Delete post"
            />
            <Button
              tabIndex={0}
              onClick={() => handleEdit({ id, title, content })}
              icon={<SvgEdit />}
              aria-label="Edit post"
            />
          </S.ButtonGroup>
        )}
      </S.Header>
      <S.WrapperContent>
        <S.TitleContent>
          <S.Username>{username}</S.Username>
          <S.DateTime>{period}</S.DateTime>
        </S.TitleContent>

        <S.Content>{content}</S.Content>
      </S.WrapperContent>
    </S.Container>
  );
};
