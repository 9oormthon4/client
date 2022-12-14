import { QuestionType, QuestionTotalType } from './questionType';

export type QuestionState = QuestionTotalType & {
  questions: QuestionType[];
};
