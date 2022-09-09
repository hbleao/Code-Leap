import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { BoxContentProps, ContainerProps } from './types';

const modifiers = {
  remove: () => css`
    display: none;
  `,
  small: () => css`
    width: 90%;

    ${media.greaterThan('small')`
      width: 50rem;
    `}
  `,
  medium: () => css`
    width: 90%;

    ${media.greaterThan('small')`
        width: 66rem;
    `}
  `,
  large: () => css`
    width: 90%;

    ${media.greaterThan('small')`
        width: 72rem;
    `}
  `
};

export const Container = styled.section<ContainerProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    overflow: hidden;
    top: 0;
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
    width: 90%;
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
