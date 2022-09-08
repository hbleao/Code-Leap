/* eslint-disable no-unused-vars */
export type PaginationProps = {
  total: number;
  activePage: number;
  totalPages: number;
  onClick: (activePage: number) => void;
};
