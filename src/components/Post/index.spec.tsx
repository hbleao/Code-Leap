import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { Post } from '.';
import { renderWithTheme } from '@/utils/tests/renderWithTheme';

type ParamsProps = {
  id: number;
  title: string;
  content: string;
};

type MakeSutProps = {
  id?: number;
  username?: string;
  title?: string;
  content?: string;
  currentUsername?: string;
  created_datetime?: string;
  handleDelete?: (params: ParamsProps) => void;
  handleEdit?: (params: ParamsProps) => void;
};

const makeSut = ({
  id = 1234345645678,
  currentUsername = '@another_username',
  username = '@Henrique',
  title = 'How to create a component in react?',
  content = 'Lorem lorem lorem lorem lorem lorem lorem',
  created_datetime = '2022-09-06T04:11:13.301945Z',
  handleEdit = () => null,
  handleDelete = () => null
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Post
      id={id}
      username={username}
      currentUsername={currentUsername}
      title={title}
      content={content}
      created_datetime={created_datetime}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );

  return {
    sut
  };
};

jest.mock('date-fns', () => ({ formatDistance: jest.fn(() => 'last month') }));

describe('Post', () => {
  it('should be render a Post correctly', () => {
    makeSut({});

    const username = screen.getByText(/@henrique/i);
    const title = screen.getByRole('heading', {
      name: /How to create a component in react/i
    });
    const description = screen.getByText(/lorem lorem lorem/i);
    const date = screen.getByText(/last month/i);

    expect(username).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it('should not be able edit post', () => {
    makeSut({});

    const editButton = screen.queryByRole('button', { name: /edit post/i });

    expect(editButton).not.toBeInTheDocument();
  });

  it('should be edit post', () => {
    const id = 1234;
    const currentUsername = '@Henrique';
    const mockHandleEdit = jest.fn();
    const postParams = {
      content: 'Lorem lorem lorem lorem lorem lorem lorem',
      id: 1234,
      title: 'How to create a component in react?'
    };
    makeSut({ id, handleEdit: mockHandleEdit, currentUsername });

    const editButton = screen.getByRole('button', { name: /edit post/i });
    fireEvent.click(editButton);

    expect(mockHandleEdit).toBeCalled();
    expect(mockHandleEdit).toBeCalledWith(postParams);
  });

  it('should not be able delete post', () => {
    makeSut({});

    const deleteButton = screen.queryByRole('button', { name: /delete post/i });

    expect(deleteButton).not.toBeInTheDocument();
  });

  it('should be delete post', () => {
    const id = 1234;
    const currentUsername = '@Henrique';
    const mockHandleDelete = jest.fn();
    const postParams = {
      content: 'Lorem lorem lorem lorem lorem lorem lorem',
      id: 1234,
      title: 'How to create a component in react?'
    };
    makeSut({ id, handleDelete: mockHandleDelete, currentUsername });

    const deleteButton = screen.getByRole('button', { name: /delete post/i });
    fireEvent.click(deleteButton);

    expect(mockHandleDelete).toBeCalled();
    expect(mockHandleDelete).toBeCalledWith(postParams);
  });
});
