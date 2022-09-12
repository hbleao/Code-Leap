import React from 'react';

import { Page } from './styles';
import { PaginationPageProps } from './types';

export const PaginationItem = ({
  page,
  activePage,
  onClick
}: PaginationPageProps) => {
  return (
    <>
      {page === '...' ? (
        <Page active={activePage === page}>{page}</Page>
      ) : (
        <Page
          tabIndex={0}
          active={activePage === page}
          onClick={() => onClick(page)}
        >
          {page}
        </Page>
      )}
    </>
  );
};
