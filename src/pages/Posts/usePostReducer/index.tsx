/* eslint-disable no-fallthrough */
import produce from 'immer';

import { ActionProps, InitialStateProps } from './types';

export function reducer(draft: InitialStateProps, action: ActionProps) {
  switch (action.type) {
    case 'setTitle': {
      draft.title = action.payload;
      return;
    }

    case 'setContent': {
      draft.content = action.payload;
      return;
    }

    case 'cleanAllFields': {
      draft.content = '';
      draft.title = '';
      return;
    }

    case 'CreatePost': {
      draft.isCreatingPost = true;
      return;
    }

    case 'setShowDeleteModal': {
      draft.showDeleteModal = action.payload;
      return;
    }

    case 'setShowEditModal': {
      draft.showUpdateModal = action.payload;
      return;
    }

    case 'PostCreated': {
      draft.isCreatingPost = false;
      draft.content = '';
      draft.title = '';
      draft.updatePostList = new Date();
      return;
    }

    case 'UpdatePost': {
      draft.isUpdatingPost = true;
      return;
    }

    case 'PostUpdated': {
      draft.showUpdateModal = false;
      draft.isUpdatingPost = false;
      draft.updatePostList = new Date();
      return;
    }

    case 'DeletePost': {
      draft.isDeletingPost = true;
      return;
    }

    case 'PostDeleted': {
      draft.updatePostList = new Date();
      draft.isDeletingPost = false;
      return;
    }
  }
}

export const postsReducer = produce(reducer);
