import { PostDTO } from '@/DTOs/Post';

export type PostProps = PostDTO & {
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
};
