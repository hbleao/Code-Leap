import styled, { css } from 'styled-components';

import { ContainerProps } from './types';

export const Container = styled.h2<ContainerProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.xxlarge};
  `}
`;
