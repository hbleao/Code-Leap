import React, { ReactNode } from 'react';
import { screen } from '@testing-library/react';

import { Skeleton } from '.';
import { renderWithTheme } from '@/utils';

type MakeSutProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  children?: ReactNode;
  style?: React.CSSProperties;
};

const makeSut = ({
  width = 100,
  height = 40,
  borderRadius,
  children,
  style
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Skeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      style={style}
    >
      {children}
    </Skeleton>
  );

  return {
    sut
  };
};

describe('Skeleton', () => {
  it('should be render a Skeleton', () => {
    makeSut({ children: 'skeleton' });

    const element = screen.getByText(/skeleton/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      width: '100rem',
      height: '40rem',
      'border-radius': '0'
    });
  });

  it('should be render a Skeleton with rounded', () => {
    makeSut({ children: 'skeleton', borderRadius: 10 });

    const element = screen.getByText(/skeleton/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      'border-radius': '10rem'
    });
  });

  it('should be render a Skeleton with red background', () => {
    makeSut({ children: 'skeleton', style: { background: '#ff0000' } });

    const element = screen.getByText(/skeleton/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      'background-color': '#ff0000'
    });
  });
});
