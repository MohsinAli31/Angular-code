export const PROFILE_LIST_REQUEST = 'profile list request';
export const PROFILE_LIST_SUCCESS = 'profile list success';
export const PROFILE_DELETE = 'profile delete';
export const PROFILE_UPDATE = 'profile update';
export const PROFILE_ADD = 'profile add';
export const PROFILE_LIST_ERROR = 'profile list error';
export const PROFILE_BY_USERID = 'profile by userid';

export class ProfileListRequestAction {
  readonly type = PROFILE_LIST_REQUEST;
}
export class ProfileByUserIdAction {
  readonly type = PROFILE_BY_USERID;
  constructor(public payload?: { id: number }) {}
}

export class ProfileListErrorAction {
  readonly type = PROFILE_LIST_ERROR;
}

export class ProfileListSuccessAction {
  readonly type = PROFILE_LIST_SUCCESS;

  // constructor(public payload?: { data: Post[] }) {}
  constructor(public payload?: { data: any }) {}
}
