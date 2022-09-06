import React, { ReactNode } from 'react';
import { screen } from '@testing-library/react';
import { TrashBin } from '@styled-icons/ionicons-solid/TrashBin';

import { Button } from '.';
import { renderWithTheme } from '@/utils/tests/renderWithTheme';

type MakeSutProps = {
  children?: ReactNode;
  isDisabled?: boolean;
  isOutline?: boolean;
  icon?: ReactNode;
};

const makeSut = ({
  children = 'click here',
  isDisabled = false,
  isOutline = false,
  icon
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Button isDisabled={isDisabled} isOutline={isOutline} icon={icon}>
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
      'background-color': '#000',
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
      'background-color': '#777777',
      color: '#000'
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
      color: '#000',
      border: '1px solid #000'
    });
  });

  it('should render an icon version', () => {
    makeSut({ children: 'buy now', icon: <TrashBin /> });

    const buttonIcon = document.querySelector('svg');

    expect(buttonIcon).toBeInTheDocument();
  });
});
