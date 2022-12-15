import { ResponsesType } from "./response"

export interface RequestIdType  {
  "userId": number,
  "userCode": string 
}

export interface AnswerResponseType  {
  responses: ResponsesType[]
}

export interface AnswerType {
  "userId": number,
  "userCode": number,
  "answerToQuestion": number
}
