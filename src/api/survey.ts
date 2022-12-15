import { AnswerResponseType } from '@/types/survey';
import axios from 'axios';
import {axiosInstance} from './axiosInstance';

export const getInnerParticipantCount = async () => {
  const response = await axios.get(`/api/surveys-participant-count`);
  return response;
};

export const getParticipantCount = async () => {
  // const response = await axios.get(`/api/surveys-participant-count`);
  const response = await axiosInstance.get(`surveys/participant-count`);
  return response;
};

export const getInnerRequestId = async () => {
  const response = await axios.get(`/api/surveys-request-id`);
  return response;
}

export const getRequestId = async () => {
  const response = await axiosInstance.get(`surveys/request-id`);
  return response;
}

export const postInnerAnswer = async (request: AnswerResponseType) => {
  const response = await axios.post(
    `/api/surveys-post-answer`,
    request, 
  );
  return response;
}

export const postAnswer = async (request: AnswerResponseType) => {
  const response = await axiosInstance.post(
    `responses`,
    request, 
  );
  return response;
}

export const getInnerScoreByUserId = async (userId: number) => {
  const response = await axios.get(`/api/surveys-score-userId`);
  return response;
}

export const getScoreByUserId = async (userId: number) => {
  const response = await axiosInstance.get(`/surveys/score/${userId}`);
  return response;
}

export const getPlantCount = async () => {
  // const response = await axios.get('/api/surveys-plant-count');
  const response = await axiosInstance.get('/surveys/plant-count');
  return response;
}
