import { PostServiceResult } from '@/hooks/usePosts/types';
import { RootState } from '@/redux/store';
import { Dispatch, FormEvent } from 'react';

type Fields = {
  title: string;
  content: string;
};

export type PresentationProps = {
  state: RootState;
  showPostList: boolean;
  isPostLoading: boolean;
  isCreatingPost: boolean;
  isDisabled: boolean;
  fields: Fields;
  setFields: Dispatch<Fields>;
  dispatch: Dispatch<any>;
  data: PostServiceResult;
  setPagination: Dispatch<any>;
  pagination: any;
  handleSubmit: (event: FormEvent) => void;
  handleUpdatePost: () => void;
  handleDeletePost: () => void;
};
