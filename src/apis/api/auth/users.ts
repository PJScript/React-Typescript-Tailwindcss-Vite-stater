// api/users.js
import { AxiosResponse } from 'axios';
import { IGetUsersApiParams, IGetUsersApiResponse } from '../../types';
import authInstance from '../../utils/authInstance';

const BASE_PATH: string = '/users';

export const getUsersApi = async ({ offset, limit }: IGetUsersApiParams): Promise<AxiosResponse<IGetUsersApiResponse>> => {
  const res = await authInstance.get<IGetUsersApiResponse>(`${BASE_PATH}?offset=${offset}&limit=${limit}`);
  return res;
};

export const test = (): string => {
  return 'a';
};
