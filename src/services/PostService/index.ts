import { Api } from '../api';
import { PostServiceResult } from './types';

export const PostService = {
  get: async () => {
    const httpRequest = await Api.get<PostServiceResult>('');
    return httpRequest.data;
  }
};
