import { ReactNode } from 'react';

export type SkeletonProps = {
  width: number;
  height: number;
  borderRadius?: number;
  children?: ReactNode;
  style?: React.CSSProperties;
};
