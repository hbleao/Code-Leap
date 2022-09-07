import styled, { css } from 'styled-components';

import { BoxContentProps, ContainerProps } from './types';

const modifiers = {
  remove: () => css`
    display: none;
  `,
  small: () => css`
    width: 50rem;
  `,
  medium: () => css`
    width: 66rem;
  `
};

export const Container = styled.section<ContainerProps>`
  ${({ theme, isOpen }) => css`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    background-color: rgba(119, 119, 119, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity 0.3s ease;

    ${!isOpen && modifiers.remove()};
  `}
`;

export const BoxContent = styled.div<BoxContentProps>`
  ${({ theme, size }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    animation: moveUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

    ${!!size && modifiers[size]()}

    @keyframes moveUp {
      0% {
        transform: translateY(150px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `}
`;
