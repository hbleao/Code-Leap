export type PostProps = {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: string;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
};
