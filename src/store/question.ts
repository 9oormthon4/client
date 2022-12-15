import { QuestionType } from '@/types/question';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { QuestionState } from '../types/reduxState';

const initialState: QuestionState = {
  questions: [],
  totalQuestionCount: 0,
};

const question = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<QuestionType[]>) {
      state.questions = action.payload;
      return state;
    },
    setTotalQuestionCount(state, action: PayloadAction<number>) {
      state.totalQuestionCount = action.payload;
      return state;
    },
  },
});

export const questionActions = { ...question.actions };

export default question;
