import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${theme.spacings.medium} 0;
  `}
`;

export const WrapperPagination = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const TotalPagination = styled.p`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
  `}
`;

export const TextHighlight = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
    margin: 0 4px;
  `}
`;

export const TextBold = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    margin: 0 4px;
  `}
`;
