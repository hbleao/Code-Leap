import styled, { css, DefaultTheme } from 'styled-components';

import { ContainerProps } from './types';

const modifier = {
  outline: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    background-color: transparent;
    border: 1px solid ${theme.colors.black};
  `,
  disabled: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.gray};
  `
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, isDisabled, isOutline }) => css`
    border: none;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};

    ${isOutline && modifier.outline(theme)};
    ${isDisabled && modifier.disabled(theme)};
  `}
`;
