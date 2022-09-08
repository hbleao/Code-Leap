import styled, { css } from 'styled-components';
import { SkeletonProps } from './types';

export const Container = styled.div<SkeletonProps>`
  ${({ width, height, borderRadius }) => css`
    width: ${`${width}rem`};
    height: ${`${height}rem`};
    border-radius: ${borderRadius ? `${borderRadius}rem` : 0};
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #ededed 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`;
