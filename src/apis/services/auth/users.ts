import { AxiosResponse } from 'axios';

/**
 *
 * @param res 응답 값을 인자로 받습니다.
 * @returns 데이터 가공 후 리턴합니다.
 */
export const getUsersAPIService = (res: AxiosResponse): AxiosResponse => {
  return res;
};

export const test = (): 'a' => {
  return 'a';
};
