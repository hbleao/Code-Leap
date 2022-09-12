import { PostServiceResult } from '@/hooks/usePosts/types';
import { RootState } from '@/redux/store';
import { Dispatch, FormEvent } from 'react';
import { InitialStateProps } from './usePostReducer/types';

export type PresentationProps = {
  reduxState: RootState;
  reduxDispatch: Dispatch<any>;
  postList: PostServiceResult;
  dispatch: any;
  isDisableButtonCreatePost: boolean;
  isDisableButtonUpdatePost: boolean;
  state: InitialStateProps;
  isPostListLoading: boolean;
  setPagination: Dispatch<any>;
  pagination: any;
  handleSubmit: (event: FormEvent) => void;
  handleUpdatePost: () => void;
  handleDeletePost: () => void;
};
