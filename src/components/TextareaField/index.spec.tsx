import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextareaField } from '.';
import { renderWithTheme } from '@/utils/tests/renderWithTheme';

type makeSutProps = {
  label?: string;
  htmlFor?: string;
  initialValue?: string;
  onInputChange?: (value: string) => void;
};

const makeSut = ({
  label,
  htmlFor,
  initialValue,
  onInputChange
}: makeSutProps) => {
  const sut = renderWithTheme(
    <TextareaField
      label={label}
      htmlFor={htmlFor}
      initialValue={initialValue}
      onInputChange={onInputChange}
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
    makeSut({ initialValue: 'Short product description' });

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
    const onInputChange = jest.fn();
    makeSut({ onInputChange });
    const input = screen.getByRole('textbox');
    const text = 'This is my new text description';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInputChange).toHaveBeenCalledWith(text);
    });
  });
});
