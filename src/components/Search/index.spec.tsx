import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from '.';
import { renderWithTheme } from '@/utils';

type MakeSutProps = {
  placeholder?: string;
  doSearch?: () => void;
};

const makeSut = ({
  placeholder = 'Search posts by username',
  doSearch = () => null
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Search doSearch={doSearch} placeholder={placeholder} />
  );

  return {
    sut
  };
};

describe('Search', () => {
  it('should be render a Search component', () => {
    makeSut({});

    const inputSearch = screen.getByRole('searchbox');

    expect(inputSearch).toBeInTheDocument();
  });

  it('should be render a input type equals search', () => {
    makeSut({});

    const inputSearch = screen.getByRole('searchbox');

    expect(inputSearch).toHaveProperty('type', 'search');
  });

  it('should be render a form', () => {
    makeSut({});

    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
  });

  it('should call doSearch prop when form is submitted', () => {
    const doSearch = jest.fn();
    makeSut({ doSearch });

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(doSearch).toHaveBeenCalledTimes(1);
  });

  it('should call doSearch prop with the user input', async () => {
    const doSearch = jest.fn();
    const text = 'some text here';
    makeSut({ doSearch });

    const form = screen.getByRole('form');
    const inputSearch = screen.getByRole('searchbox');

    await userEvent.type(inputSearch, text);
    fireEvent.submit(form);

    expect(doSearch).toHaveBeenCalledWith(text);
  });
});
