import { useState } from 'react';
import { useQuery } from 'react-query';

import { PostService } from '@/services';
import { PostServiceResult } from './types';
import { useDebounce } from '../useDebounce';

export const usePosts = (forceUpdate?: any) => {
  const [term, setTerm] = useState('');
  const inputDebounce = useDebounce(term, 700);
  const [pagination, setPagination] = useState({
    activePage: 1,
    totalPages: 0,
    offset: 0,
    limit: 10
  });

  const { data, isError, isLoading } = useQuery(
    ['get-posts', pagination.activePage, inputDebounce, forceUpdate],
    () =>
      PostService.get({
        username: inputDebounce,
        limit: pagination.limit,
        offset: pagination.offset
      })
  );

  return {
    data: data as PostServiceResult,
    errors: isError,
    isLoading,
    pagination,
    setPagination,
    term,
    setTerm
  };
};
