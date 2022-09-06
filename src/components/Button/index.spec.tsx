import React, { ReactNode } from 'react';
import { screen } from '@testing-library/react';

import { Button } from '.';
import { renderWithTheme } from '@/utils/tests/renderWithTheme';

type MakeSutProps = {
  children?: ReactNode;
  isDisabled?: boolean;
  isOutline?: boolean;
};

const makeSut = ({
  children = 'click here',
  isDisabled = false,
  isOutline = false
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Button isDisabled={isDisabled} isOutline={isOutline}>
      {children}
    </Button>
  );
  return {
    sut
  };
};

describe('Button', () => {
  it('should be able to render a button', () => {
    makeSut({});

    const buttonElement = screen.getByRole('button', { name: /click here/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({
      'background-color': '#222',
      color: '#FAFAFA'
    });
  });

  it('should be able to disabled button', () => {
    makeSut({ children: 'disabled button', isDisabled: true });

    const buttonElement = screen.getByRole('button', {
      name: /disabled button/i
    });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('disabled');
    expect(buttonElement).toHaveStyle({
      'background-color': '#8F8F8F',
      color: '#222'
    });
  });

  it('should be able to render a outline button', () => {
    makeSut({ children: 'outline button', isOutline: true });

    const buttonElement = screen.getByRole('button', {
      name: /outline button/i
    });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({
      'background-color': 'transparent',
      color: '#222',
      border: '1px solid #222'
    });
  });
});
