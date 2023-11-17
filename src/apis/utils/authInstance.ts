import axios from 'axios';
import { getAuthToken } from '../../utils/localStorage';

const baseURL = import.meta.env.REACT_APP_API_BASE_URL;

const authInstance = axios.create({
  baseURL,
  headers: {
    Authorization: getAuthToken(),
    'Content-Type': 'application/json',
  },
});

authInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();

    if (token) {
      // 객체 재할당 방지 관련 체크를 무시하는 주석
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default authInstance;
