import { ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode;
  color?: 'black' | 'white';
};

export type ContainerProps = Pick<HeadingProps, 'color'>;
