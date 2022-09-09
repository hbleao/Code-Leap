import React from 'react';

import * as S from './styles';
import { ButtonLoaderProps } from './types';

export const ButtonLoader = ({ loaderColor = 'white' }: ButtonLoaderProps) => {
  return (
    <S.Container loaderColor={loaderColor}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.Container>
  );
};
