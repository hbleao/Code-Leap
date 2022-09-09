import { PostDTO } from '@/DTOs/Post';

export type PostServiceResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PostDTO[];
};

export type CreatePostProps = {
  username: string;
  title: string;
  content: string;
};

export type GetPostProps = {
  limit: number;
  offset?: number;
};

export type UpdatePostProps = {
  id: number;
  title: string;
  content: string;
};
