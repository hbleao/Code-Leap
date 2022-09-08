/* eslint-disable consistent-return */
/* eslint-disable prefer-spread */

import { PaginationProps } from './types';

function centerRules({ activePage, total }: PaginationProps) {
  if (activePage - 1 <= 0) return 1;
  if (activePage === total && total > 2) return activePage - 2;
  return activePage - 1;
}

function getValuesByActivePage({ activePage, total }: PaginationProps) {
  const visiblePages = 3;

  if (total <= 5) {
    return Array.from(
      { length: total },
      (_, i) => i + centerRules({ activePage, total })
    );
  }

  return Array.from(
    { length: visiblePages },
    (_, i) => i + centerRules({ activePage, total })
  );
}

export function pagination({ activePage, total }: PaginationProps) {
  const centerPages = getValuesByActivePage({ activePage, total });
  let pages = [1, ...centerPages, total] as any[];

  pages = pages.filter((page, index, array) => array.indexOf(page) === index);

  const firstPage = pages[0];
  const secondPage = pages[1];

  if (secondPage === firstPage + 2) {
    pages = [firstPage, firstPage + 1, ...pages.slice(1)];
  }

  if (secondPage > firstPage + 2) {
    pages = [firstPage, '...', ...pages.slice(1)];
  }

  const penultimatePage = pages[pages.length - 2];
  const lastPage = pages[pages.length - 1];

  if (penultimatePage === lastPage - 2) {
    pages = [...pages.slice(0, -1), lastPage - 1, lastPage];
  }

  if (penultimatePage < lastPage - 2) {
    pages = [...pages.slice(0, -1), '...', lastPage];
  }

  return pages;
}
