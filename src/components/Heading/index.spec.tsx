import React, { ReactNode } from 'react';
import { screen } from '@testing-library/react';

import { Heading } from '.';
import { renderWithTheme } from '@/utils/tests/renderWithTheme';

type MakeSutProps = {
  children?: ReactNode;
  color?: 'black' | 'white';
};

const makeSut = ({ children = 'text', color }: MakeSutProps) => {
  const sut = renderWithTheme(<Heading color={color}>{children}</Heading>);

  return {
    sut
  };
};

describe('Heading', () => {
  it('should be render a Heading', () => {
    makeSut({ children: 'Code Leap' });

    const heading = screen.getByRole('heading', { name: /code leap/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: '#000'
    });
  });

  it('should be render a Heading with white color', () => {
    makeSut({ children: 'Code Leap', color: 'white' });

    const heading = screen.getByRole('heading', { name: /code leap/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: '#FAFAFA'
    });
  });
});
