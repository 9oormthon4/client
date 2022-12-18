import axios from 'axios';
import {axiosInstance} from './axiosInstance';

export const getInnerQuestions = async () => {
  const response = await axios.get('/api/question');
  return response;
};

export const getQuestions = async () => {
  const response = await axiosInstance.get('questions');
  return response;
};
