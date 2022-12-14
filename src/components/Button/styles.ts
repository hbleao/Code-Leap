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
    cursor: not-allowed;
  `,
  withIcon: (theme: DefaultTheme) => css`
    padding: 0;
    background-color: transparent;

    > svg {
      fill: & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, isDisabled, isOutline, hasIcon }) => css`
    border: none;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    line-height: ${theme.font.sizes.large};
    cursor: pointer;

    ${hasIcon && modifier.withIcon(theme)}
    ${isOutline && modifier.outline(theme)};
    ${isDisabled && modifier.disabled(theme)};
  `}
`;
