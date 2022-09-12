import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from '.';
import { renderWithTheme } from '@/utils/tests/renderWithTheme';

type makeSutProps = {
  label?: string;
  htmlFor?: string;
  onChange?: () => void;
  value?: string;
};

const makeSut = ({
  label,
  htmlFor,
  value,
  onChange = jest.fn()
}: makeSutProps) => {
  const sut = renderWithTheme(
    <TextField
      label={label}
      htmlFor={htmlFor}
      value={value}
      onChange={onChange}
    />
  );

  return {
    sut
  };
};

describe('TextField', () => {
  it('should be able render a TextField', () => {
    makeSut({});

    const input = screen.getByRole('textbox', { name: '' });
    const label = document.querySelector('label');

    expect(input).toBeInTheDocument();
    expect(label).not.toBeInTheDocument();
  });

  it('should be able render a TextField with initial value', () => {
    makeSut({ value: 'Jhon doe' });

    waitFor(() => {
      const input = screen.getByRole('textbox', { name: /jhon doe/i });
      expect(input).toBeInTheDocument();
    });
  });

  it('Changes its value when typing', async () => {
    const onChange = jest.fn();
    makeSut({ onChange });
    const input = screen.getByRole('textbox');
    const text = 'This is my new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });
  });
});
