import styled, { css } from 'styled-components';

import { PageProps } from './types';

export const Page = styled.div<PageProps>`
  ${({ theme, active }) => css`
    width: 35px;
    height: 35px;
    background-color: ${active ? theme.colors.gray : theme.colors.black};
    color: ${theme.colors.white};
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  `}
`;
