import styled, { css } from 'styled-components';

export const Container = styled.form`
  ${({ theme }) => css`
    max-width: 34rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 1px solid ${theme.colors.gray};
    display: flex;
    align-items: center;

    &:focus-within {
      outline: auto;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;
    border: none;
    background-color: transparent;
    outline: none;
    margin-left: ${theme.spacings.xxsmall};
  `}
`;
