import { useState } from 'react';
import { useQuery } from 'react-query';

import { PostService } from '@/services';
import { PostServiceResult } from './types';

export const usePosts = (forceUpdate?: any) => {
  const [pagination, setPagination] = useState({
    activePage: 1,
    totalPages: 0,
    offset: 0,
    limit: 10
  });

  const { data, isError, isLoading } = useQuery(
    ['post', pagination.activePage, forceUpdate],
    () =>
      PostService.get({
        limit: pagination.limit,
        offset: pagination.offset
      })
  );

  return {
    data: data as PostServiceResult,
    errors: isError,
    isLoading,
    pagination,
    setPagination
  };
};
