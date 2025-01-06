import axios, {
  AxiosError,
  AxiosInstance,
  CreateAxiosDefaults,
  isAxiosError,
} from 'axios';
import { HttpStatusCode } from '@/constants/apiStatus';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // 수정 필요

const setInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const requestConfig = config;

      // header에 sessionStorage에 저장되어 있는 token을 포함한다고 가정
      // const accessToken = sessionStorage.getItem('token');

      // if (accessToken) {
      //   requestConfig.headers.Authorization = `Bearer ${accessToken}`;
      // }
      return config;
    },
    (err: AxiosError): Promise<AxiosError> => Promise.reject(err),
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (isAxiosError(error)) {
        if (error.response && error.response.data) {
          const { status, code, message } = error.response.data;
          console.log(status, code, message);

          if (status === HttpStatusCode.UNAUTHORIZED) {
            // 다시 로그인
          }

          if (status === HttpStatusCode.INTERNAL_SERVER_ERROR) {
            // 에러
          }

          return Promise.reject(error);
        }
      }

      console.error(error);
      return Promise.reject(error);
    },
  );

  return instance;
};

const options: CreateAxiosDefaults = {
  headers: {
    Accept: '*/*',
    'Content-type': 'application/json; charset=UTF-8',
  },
  baseURL: BASE_URL,
};

export const ax = axios.create(options);

setInterceptor(ax);
