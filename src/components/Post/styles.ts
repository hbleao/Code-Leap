import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    width: 72rem;
    background-color: ${theme.colors.white};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    height: 7rem;
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    display: flex;
    justify-items: center;
    justify-content: space-between;
  `}
`;

export const ButtonGroup = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-items: center;
  `}
`;

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.medium};
  `}
`;

export const TitleContent = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const Username = styled.p`
  ${({ theme }) => css`
    font-family: 1.8rem;
    line-height: ${theme.spacings.small};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray};
  `}
`;

export const DateTime = styled.p`
  ${({ theme }) => css`
    line-height: ${theme.spacings.small};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray};
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    line-height: ${theme.spacings.small};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
  `}
`;
