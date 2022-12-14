import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
};

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create(axiosConfig);
