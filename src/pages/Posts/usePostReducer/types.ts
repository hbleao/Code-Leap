export type InitialStateProps = {
  title: string;
  content: string;
  showDeleteModal: boolean;
  showUpdateModal: boolean;
  isCreatingPost: boolean;
  isUpdatingPost: boolean;
  isDeletingPost: boolean;
  updatePostList: any;
  showPostList: boolean;
};

export type ActionProps = {
  type:
    | 'setTitle'
    | 'setContent'
    | 'cleanAllFields'
    | 'setUpdatePostList'
    | 'setShowEditModal'
    | 'setShowDeleteModal'
    | 'CreatePost'
    | 'PostCreated'
    | 'UpdatePost'
    | 'PostUpdated'
    | 'DeletePost'
    | 'PostDeleted';
  payload?: any;
};
