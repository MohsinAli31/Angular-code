import { Post } from '../models/post';
import { Action } from '../actions';
import {
  POST_LIST_ERROR,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_DELETE,
  POST_UPDATE,
} from '../actions/post-action';

import { createSelector } from '@ngrx/store';

export interface PostReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  posts: Post[];
}

const initialState: PostReducerState = {
  loaded: false,
  loading: false,
  error: false,
  posts: [],
};

export function PostReducer(
  state = initialState,
  action: Action
): PostReducerState {
  switch (action.type) {
    case POST_LIST_REQUEST: {
      return { ...state, loading: true };
    }

    case POST_DELETE: {
      const newPosts = state.posts.filter(
        (data) => data.id !== action.payload.id
      );
      return { ...state, ...{ posts: newPosts } };
    }
    case POST_UPDATE: {
      console.log('data is', action.payload, 'id', action.payload.id);

      state.posts = state.posts.filter((res) => {
        if (res.id == action.payload.id) {
          return { ...action.payload.data };
        }
      });
      // console.log('posts are for loop');
      // console.log('now ngrx update');
      // console.log('id is:', action.payload.id);
      // console.log('data is', action.payload.data.title);
      ////////////
      // const newPosts = [];
      // newPosts.push(state.posts);

      // console.log('new posts', newPosts);
      // const updatedUser = Posts.concat(action.payload.data);

      // console.log('posts after update are', state.posts);

      return { ...state };
    }

    case POST_LIST_ERROR: {
      return { ...state, error: true, loading: false };
    }
    case POST_LIST_SUCCESS: {
      const updatedPost = state.posts.concat(action.payload.data);
      return {
        ...state,
        loading: false,
        loaded: true,
        posts: updatedPost,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
}

// selectors
export const getLoading = (state: PostReducerState) => state.loading;
export const getLoaded = (state: PostReducerState) => state.loaded;
export const getPosts = (state: PostReducerState) => state.posts;
export const getError = (state: PostReducerState) => state.error;
