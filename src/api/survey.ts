import { AnswerResponseType } from '@/types/survey';
import {axiosInstance} from './axiosInstance';

export const getParticipantCount = async () => {
  const response = await axiosInstance.get(`surveys/participant-count`);
  return response;
};

export const getRequestId = async () => {
  const response = await axiosInstance.get(`surveys/request-id`);
  return response;
}

export const postAnswer = async (request: AnswerResponseType) => {
  const response = await axiosInstance.post(
    `responses`,
    request,
  );
  return response;
}