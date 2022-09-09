import React from 'react';

import * as S from './styles';
import { HeadingProps } from './types';

export const Heading = ({ children, color = 'black' }: HeadingProps) => {
  return <S.Container color={color}>{children}</S.Container>;
};
