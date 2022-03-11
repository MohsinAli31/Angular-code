import * as fromPost from './post-reducer';
import * as fromProfile from './profile-reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import { from } from 'rxjs';

export interface RootReducerState {
  posts: fromPost.PostReducerState;
  userProfile: fromProfile.ProfileReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  posts: fromPost.PostReducer,
  userProfile: fromProfile.ProfileReducer,
};

export const getPostState = (state: RootReducerState) => state.posts;

export const getPostLoaded = createSelector(getPostState, fromPost.getLoaded);
export const getPostLoading = createSelector(getPostState, fromPost.getLoading);

export const getPosts = createSelector(getPostState, fromPost.getPosts);
export const getPostsError = createSelector(getPostState, fromPost.getError);

//// here getiing profiles states

export const getProfileState = (state: RootReducerState) => state.userProfile;

export const getProfileLoaded = createSelector(
  getProfileState,
  fromProfile.getLoaded
);
export const getProfileLoading = createSelector(
  getProfileState,
  fromProfile.getLoading
);

export const getUserProfile = createSelector(
  getProfileState,
  fromProfile.getUserProfile
);
export const getProfileError = createSelector(
  getProfileState,
  fromProfile.getError
);
