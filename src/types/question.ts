export interface QuestionResponse  {
  "totalQuestionCount": 10,
  "questions": Question[] 
}

export interface Question {
  "questionId": number,
  "questionContent": string,
  "questionImageUrl": string,
  "question_type": string,
  "optionOne": string,
  "optionTwo": string,
  "optionThree": string,
  "optionFour": string,
}
