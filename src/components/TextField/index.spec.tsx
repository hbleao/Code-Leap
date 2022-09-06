import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from '.';
import { renderWithTheme } from '@/utils/tests/renderWithTheme';

type makeSutProps = {
  label?: string;
  htmlFor?: string;
  initialValue?: string;
};

const makeSut = ({ label, htmlFor, initialValue }: makeSutProps) => {
  const sut = renderWithTheme(
    <TextField label={label} htmlFor={htmlFor} initialValue={initialValue} />
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
    makeSut({ initialValue: 'Jhon doe' });

    waitFor(() => {
      const input = screen.getByRole('textbox', { name: /jhon doe/i });
      expect(input).toBeInTheDocument();
    });
  });

  it('should be able render a TextField with label', () => {
    makeSut({ label: 'Name', htmlFor: 'name' });

    const label = screen.getByText(/name/i);

    expect(label).toBeInTheDocument();
  });

  it('Changes its value when typing', async () => {
    makeSut({});

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });
  });
});