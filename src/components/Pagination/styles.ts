import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${theme.spacings.medium};
  `}
`;

export const WrapperPagination = styled.div`
  display: flex;
  align-items: center;
`;

export const TotalPagination = styled.p`
  ${({ theme }) => css`
    display: flex;
    font-size: 16px;
    color: ${theme.colors.gray};
  `}
`;

export const TextHighlight = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: 400;
    margin: 0 4px;
  `}
`;

export const TextBold = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    margin: 0 4px;
  `}
`;
