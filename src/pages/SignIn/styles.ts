import styled, { css } from 'styled-components';

export const InputGroup = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: flex;
    justify-content: flex-end;
  `}
`;
