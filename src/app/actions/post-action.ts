import { Post } from '../models/post';

export const POST_LIST_REQUEST = 'user list request';
export const POST_LIST_SUCCESS = 'user list success';
export const POST_DELETE = 'post delete';
export const POST_UPDATE = 'post update';
export const USER_ADD = 'user add';
export const POST_LIST_ERROR = 'user list error';

export class PostListRequestAction {
  readonly type = POST_LIST_REQUEST;
}

export class PostUpdateAction {
  type = POST_UPDATE;

  constructor(public payload?: { data: any; id: number }) {}
}

export class PostListErrorAction {
  readonly type = POST_LIST_ERROR;
}
export class PostDeleteAction {
  readonly type = POST_DELETE;

  constructor(public payload?: { id: number }) {}
}
export class PostListSuccessAction {
  readonly type = POST_LIST_SUCCESS;

  // constructor(public payload?: { data: Post[] }) {}
  constructor(public payload?: { data: any }) {}
}
