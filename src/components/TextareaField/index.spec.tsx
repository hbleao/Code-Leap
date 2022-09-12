import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextareaField } from '.';
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
    <TextareaField
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

describe('TextareaField', () => {
  it('should be able render a TextareaField', () => {
    makeSut({});

    const input = screen.getByRole('textbox', { name: '' });
    const label = document.querySelector('label');

    expect(input).toBeInTheDocument();
    expect(label).not.toBeInTheDocument();
  });

  it('should be able render a TextareaField with label', () => {
    makeSut({ label: 'Name', htmlFor: 'name' });

    const label = screen.getByText(/name/i);

    expect(label).toBeInTheDocument();
  });

  it('should be able render a TextareaField with initial value', () => {
    makeSut({ value: 'Short product description' });

    waitFor(() => {
      const input = screen.getByRole('textbox', {
        name: /short product description/i
      });
      expect(input).toBeInTheDocument();
    });
  });

  it('Changes its value when typing', async () => {
    makeSut({});

    const input = screen.getByRole('textbox');
    const text = 'This is my new text description';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });
  });

  it('Changes its value when typing', async () => {
    const onChange = jest.fn();
    makeSut({ onChange });
    const input = screen.getByRole('textbox');
    const text = 'This is my new text description';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });
  });
});
