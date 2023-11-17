/**
 * @param offset 띄어넘을 갯수
 * @param limit 최대 갯수
 */
export interface IGetUsersApiParams {
  offset: number;
  limit: number;
}

export interface IGetUsersApiResponse {
  id: number;
  nickname: string;
}
