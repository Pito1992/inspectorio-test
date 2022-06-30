import axios from 'axios'
import { GITHUB_API_GET_USER_DETAIL } from '../constants/urls';

export const getUserProfileById = (userAPI: string): Promise<any> => (
  axios(`${GITHUB_API_GET_USER_DETAIL}/${userAPI}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
)



