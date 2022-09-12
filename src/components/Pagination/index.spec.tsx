import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils';

import { Pagination } from '.';

describe('Pagination', () => {
  it('should render pagination with 1 active page', () => {
    const pagination = {
      activePage: 1,
      totalPages: 10,
      total: 1000,
      onClick: () => null
    };
    renderWithTheme(<Pagination {...pagination} />);

    const paginationNumber = screen.getByText('1');

    expect(paginationNumber).toBeInTheDocument();
    expect(paginationNumber).toHaveStyle({
      backgroundColor: '#777777'
    });
  });

  it('should render pagination with 2 active page', () => {
    const pagination = {
      activePage: 2,
      totalPages: 3,
      total: 30,
      onClick: () => null
    };

    renderWithTheme(<Pagination {...pagination} />);

    const firstPagination = screen.getByText('1');
    const secondPagination = screen.getByText('2');
    const thirdPagination = screen.getByText('3');

    expect(firstPagination).toHaveStyle({
      backgroundColor: '#000000'
    });
    expect(secondPagination).toHaveStyle({
      backgroundColor: '#777777'
    });
    expect(thirdPagination).toHaveStyle({
      backgroundColor: '#000000'
    });
  });

  it('should render pagination with 1 active page and total pages 7', () => {
    const pagination = {
      activePage: 1,
      totalPages: 7,
      total: 100,
      onClick: () => null
    };

    renderWithTheme(<Pagination {...pagination} />);

    const firstPagination = screen.getByText('1');
    const dotPagination = screen.getByText('...');

    expect(dotPagination).toBeInTheDocument();
    expect(firstPagination).toHaveStyle({
      backgroundColor: '#777777'
    });
  });

  it('should render pagination with 18 active page and total page 20', () => {
    const pagination = {
      activePage: 18,
      totalPages: 20,
      total: 200,
      onClick: () => null
    };

    renderWithTheme(<Pagination {...pagination} />);

    const eightTeenThPagination = screen.getByText('18');
    const dotPagination = screen.getByText('...');

    expect(dotPagination).toBeInTheDocument();
    expect(eightTeenThPagination).toHaveStyle({
      backgroundColor: '#777777'
    });
  });

  it('should render pagination with 10 active page and total page 20', () => {
    const pagination = {
      activePage: 10,
      totalPages: 20,
      total: 200,
      onClick: () => null
    };

    renderWithTheme(<Pagination {...pagination} />);

    const teenThPagination = screen.getByText('10');
    const [dotPagination1, dotPagination2] = screen.getAllByText('...');

    expect(dotPagination1).toBeInTheDocument();
    expect(dotPagination2).toBeInTheDocument();
    expect(teenThPagination).toHaveStyle({
      backgroundColor: '#777777'
    });
  });

  it('should be able click in pagination button', () => {
    const handleClick = jest.fn();
    const pagination = {
      activePage: 10,
      totalPages: 20,
      total: 200,
      onClick: handleClick
    };

    renderWithTheme(<Pagination {...pagination} />);

    const firstPagination = screen.getByText('1');
    fireEvent.click(firstPagination);

    expect(handleClick).toBeCalled();
  });
});
