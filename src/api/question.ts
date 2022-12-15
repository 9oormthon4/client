import {axiosInstance} from './axiosInstance';

export const getQuestions = async () => {
  const response = await axiosInstance.get(`questions`);
  return response;
};
