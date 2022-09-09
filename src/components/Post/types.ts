export type EditParamsProps = {
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
  handleDelete: (id: number) => void;
  handleEdit: (params: EditParamsProps) => void;
};
