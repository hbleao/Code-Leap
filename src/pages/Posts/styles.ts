import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    margin: 0 auto;
    background-color: ${theme.colors.white};
    min-height: 100vh;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    height: 8rem;
    background-color: ${theme.colors.black};
    padding: 0 ${theme.spacings.medium};
    display: flex;
    align-items: center;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
  `}
`;

export const InputGroup = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    display: flex;
    justify-content: flex-end;
  `}
`;

export const PostList = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
  `}
`;
