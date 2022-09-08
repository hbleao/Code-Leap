import React from 'react';

import * as S from './styles';
import { SkeletonProps } from './types';

export const Skeleton = ({
  width,
  height,
  borderRadius,
  children,
  style
}: SkeletonProps) => {
  return (
    <S.Container
      style={style}
      height={height}
      width={width}
      borderRadius={borderRadius}
    >
      {children}
    </S.Container>
  );
};
