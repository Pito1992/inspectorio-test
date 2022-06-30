import type { IUserProfileData } from '../actions/interfaces';

export interface IUserProfileState {
  data: IUserProfileData,
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}