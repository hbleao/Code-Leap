import { PostDTO } from '@/DTOs/Post';

export type PostServiceResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PostDTO[];
};
