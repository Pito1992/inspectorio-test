import { createReducer } from '@reduxjs/toolkit'
import { getUserProfileById } from '../actions';
import type { IUserProfileState } from './interfaces';
import type { IUserProfileData } from '../actions/interfaces';

export const initialState: IUserProfileState = {
  loading: 'idle',
  data: {} as IUserProfileData, 
};

const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(getUserProfileById.fulfilled, (state, action) => {
    return {
      ...state,
      data: {
        ...state.data,
        ...action.payload,
      }
    }
  })
})

export default usersReducer;
