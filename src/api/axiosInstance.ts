import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    "Access-Control-Allow-Credentials": true,
    "id": "jeju",
    "password": "pwd"
  },
};

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create(axiosConfig);
