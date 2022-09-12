export type PostParamsProps = {
  id: number;
  title: string;
  content: string;
};

export type PostProps = {
  id: number;
  username: string;
  title: string;
  content: string;
  currentUsername: string;
  created_datetime: string;
  handleDelete: (params: PostParamsProps) => void;
  handleEdit: (params: PostParamsProps) => void;
};
