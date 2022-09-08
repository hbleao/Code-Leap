import React from 'react';

import * as S from './styles';

import { pagination } from '@/utils';

import { PaginationProps } from './types';
import { PaginationItem } from './PaginationItem';

export const Pagination = ({
  activePage,
  totalPages,
  onClick
}: PaginationProps) => {
  const pages = pagination({ activePage, total: totalPages });

  return (
    <S.Container data-testid="pagination">
      <S.WrapperPagination>
        {pages.map((page, i) => (
          <PaginationItem
            key={i}
            page={page}
            activePage={activePage}
            onClick={onClick}
          />
        ))}
      </S.WrapperPagination>
    </S.Container>
  );
};
