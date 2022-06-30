import { createSelector } from '@reduxjs/toolkit';
import type { IUserProfileState } from '../reducer/interfaces';
import type { IUserProfileData } from '../actions/interfaces';
import type { RootState } from '../../interfaces';

export const userProfileListSelector = (state: RootState): IUserProfileState => state.users;

export const getUserProfileByIdSelector = (userId?: string) => createSelector(
  userProfileListSelector,
  ({ data }: IUserProfileState): IUserProfileData => userId ? data[userId] : null,
);
