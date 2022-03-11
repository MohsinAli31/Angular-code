import { Action } from '../actions';
import {
  PROFILE_LIST_ERROR,
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_SUCCESS,
  PROFILE_BY_USERID,
} from '../actions/profile-action';

import { createSelector } from '@ngrx/store';
export interface Profile {
  id: number;
  gender: string;
  phonenumber: number;
  picture: string;
  userId: number;
  bio: string;
}

export interface ProfileReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  userProfile: Profile[];
}

const initialState: ProfileReducerState = {
  loaded: false,
  loading: false,
  error: false,
  userProfile: [],
};

export function ProfileReducer(
  state = initialState,
  action: Action
): ProfileReducerState {
  switch (action.type) {
    case PROFILE_LIST_REQUEST: {
      return { ...state, loading: true };
    }
    case PROFILE_LIST_ERROR: {
      return { ...state, error: true, loading: false };
    }
    case PROFILE_LIST_SUCCESS: {
      const updatedProfile = state.userProfile.concat(action.payload.data);
      return {
        ...state,
        loading: false,
        loaded: true,
        userProfile: updatedProfile,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
}

// selectors
export const getLoading = (state: ProfileReducerState) => state.loading;
export const getLoaded = (state: ProfileReducerState) => state.loaded;
export const getUserProfile = (state: ProfileReducerState) => state.userProfile;
export const getError = (state: ProfileReducerState) => state.error;
