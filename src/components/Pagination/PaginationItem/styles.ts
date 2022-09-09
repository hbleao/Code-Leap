import styled, { css } from 'styled-components';

import { PageProps } from './types';

export const Page = styled.div<PageProps>`
  ${({ theme, active }) => css`
    min-width: 3.5rem;
    height: 3.5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background-color: ${active ? theme.colors.gray : theme.colors.black};
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
    cursor: pointer;
    border-radius: ${theme.border.radius};
  `}
`;
