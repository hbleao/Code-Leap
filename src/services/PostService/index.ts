import { queryString } from '@/utils';

import { Api } from '../api';
import {
  CreatePostProps,
  GetPostProps,
  PostServiceResult,
  UpdatePostProps
} from './types';

export const PostService = {
  get: async (params: GetPostProps) => {
    const httpRequest = await Api.get<PostServiceResult>(
      `?${queryString(params)}/`
    );
    return httpRequest.data;
  },
  create: async (data: CreatePostProps) => {
    const httpRequest = await Api.post<PostServiceResult>('', { ...data });
    return httpRequest.data;
  },
  update: async ({ id, ...rest }: UpdatePostProps) => {
    const httpRequest = await Api.patch(`${id}/`, { ...rest });
    return httpRequest.data;
  },
  delete: async (id: number) => {
    const httpRequest = await Api.delete(`${id}/`);
    return httpRequest.data;
  }
};
