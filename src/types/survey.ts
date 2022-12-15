export interface RequestIdType  {
  "userId": number,
  "userCode": string 
}

export interface AnswerResponseType  {
  responses: AnswerType[]
}

export interface AnswerType {
  "userId": number,
  "userCode": number,
  "answerToQuestion": number
}