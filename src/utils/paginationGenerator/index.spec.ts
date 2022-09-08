import { pagination } from '.';

describe('Utils/pagination', () => {
  it('should be a function', () => {
    expect(pagination).toBeInstanceOf(Function);
  });

  it('pagination { total: 1, activePage: 1 } should return [1]', () => {
    const params = { total: 1, activePage: 1 };
    const result = [1];
    expect(pagination(params)).toEqual(result);
  });

  it('pagination { total: 2, activePage: 1 } should return [1, 2]', () => {
    const params = { total: 2, activePage: 1 };
    const result = [1, 2];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination { total: 2, activePage: 1 } should return [1, 2]', () => {
    const params = { total: 2, activePage: 2 };
    const result = [1, 2];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 5 , active: 1 }) should return [1, 2, 3, 4, 5]', () => {
    const params = { total: 5, activePage: 1 };
    const result = [1, 2, 3, 4, 5];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 6 , active: 1 }) should return [1, 2, 3, "...", 6]', () => {
    const params = { total: 6, activePage: 1 };
    const result = [1, 2, 3, '...', 6];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 6 , active: 2 }) should return [1, 2, 3, "...", 6]', () => {
    const params = { total: 6, activePage: 2 };
    const result = [1, 2, 3, '...', 6];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 6 , active: 3 }) should return [1, 2, 3, 4, 5, 6]', () => {
    const params = { total: 6, activePage: 3 };
    const result = [1, 2, 3, 4, 5, 6];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 6 , active: 4 }) should return [1, "...", 4, 5, 6]', () => {
    const params = { total: 6, activePage: 4 };
    const result = [1, 2, 3, 4, 5, 6];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 6 , active: 5 }) should return [1, "...", 4, 5, 6]', () => {
    const params = { total: 6, activePage: 5 };
    const result = [1, '...', 4, 5, 6];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 6 , active: 6 }) should return [1, "...", 4, 5, 6]', () => {
    const params = { total: 6, activePage: 6 };
    const result = [1, '...', 4, 5, 6];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 7 , active: 1 }) should return [1, 2, 3, "...", 7]', () => {
    const params = { total: 7, activePage: 1 };
    const result = [1, 2, 3, '...', 7];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });
  it('pagination({ total: 7 , active: 3 }) should return [1, 2, 3, 4, "...", 7]', () => {
    const params = { total: 7, activePage: 3 };
    const result = [1, 2, 3, 4, '...', 7];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 7 , active: 4 }) should return [1, 2, 3, 4, "...", 7]', () => {
    const params = { total: 7, activePage: 4 };
    const result = [1, 2, 3, 4, 5, 6, 7];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 7 , active: 5 }) should return [1, "...", 4, 5, 6, 7]', () => {
    const params = { total: 7, activePage: 5 };
    const result = [1, '...', 4, 5, 6, 7];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 7 , active: 6 }) should return [1, "...", 5, 6, 7]', () => {
    const params = { total: 7, activePage: 6 };
    const result = [1, '...', 5, 6, 7];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 7 , active: 7 }) should return [1, "...", 5, 6, 7]', () => {
    const params = { total: 7, activePage: 7 };
    const result = [1, '...', 5, 6, 7];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });

  it('pagination({ total: 15 , active: 8 }) should return [1, "...", 7, 8, 9, "...", 15]', () => {
    const params = { total: 15, activePage: 8 };
    const result = [1, '...', 7, 8, 9, '...', 15];

    const paginationResult = pagination(params);
    expect(paginationResult).toEqual(result);
  });
});
