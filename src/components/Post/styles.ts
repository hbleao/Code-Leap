import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray};

    ${media.greaterThan('small')`
      width: 72rem;
    `}
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};

    ${media.greaterThan('small')`
      height: 7rem;
      flex-direction: row;
      justify-items: center;
      justify-content: space-between;
    `}
  `}
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xsmall};
    gap: ${theme.spacings.small};

    ${media.greaterThan('small')`
      margin: 0;
    `}
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
