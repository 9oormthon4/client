export interface QuestionResponseType  {
  "totalQuestionCount": number,
  "questions": QuestionType[] 
}

export interface QuestionType {
  "questionId": number,
  "questionContent": string,
  "questionImageUrl": string,
  "question_type": string,
  "optionOne": string,
  "optionTwo": string,
  "optionThree": string,
  "optionFour": string,
}
