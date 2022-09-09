import { PostDTO } from '@/DTOs';

export type PostServiceResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PostDTO[];
};
