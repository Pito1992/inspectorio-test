import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  GET_USER_PROFILE_ASYNC,
} from '../../../constants/actionTypes';
import * as userProfileAPI from '../../../apis/user-profile';
import type { IUserProfileData } from './interfaces';

export const getUserProfileById = createAsyncThunk(
  GET_USER_PROFILE_ASYNC,
  async (userId: string): Promise<Record<string, IUserProfileData>> => {
    const response = await userProfileAPI.getUserProfileById(userId)
    return {
      [userId]: response.data,
    }
  }
)
