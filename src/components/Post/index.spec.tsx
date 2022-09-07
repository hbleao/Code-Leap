import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { Post } from '.';
import { renderWithTheme } from '@/utils/tests/renderWithTheme';

type MakeSutProps = {
  id?: number;
  username?: string;
  title?: string;
  content?: string;
  created_datetime?: string;
  handleDelete?: (id: number) => void;
  handleEdit?: (id: number) => void;
};

const makeSut = ({
  id = 1234345645678,
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
    const title = screen.getByText(/How to create a component in react/i);
    const description = screen.getByText(/lorem lorem lorem/i);
    const date = screen.getByText(/last month/i);

    expect(username).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it('should be edit post', () => {
    const id = 1234;
    const mockHandleEdit = jest.fn();
    makeSut({ id, handleEdit: mockHandleEdit });

    const editButton = screen.getByRole('button', { name: /edit post/i });
    fireEvent.click(editButton);

    expect(mockHandleEdit).toBeCalled();
    expect(mockHandleEdit).toBeCalledWith(id);
  });

  it('should be delete post', () => {
    const id = 1234;
    const mockHandleDelete = jest.fn();
    makeSut({ id, handleDelete: mockHandleDelete });

    const deleteButton = screen.getByRole('button', { name: /delete post/i });
    fireEvent.click(deleteButton);

    expect(mockHandleDelete).toBeCalled();
    expect(mockHandleDelete).toBeCalledWith(id);
  });
});
