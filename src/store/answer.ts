import { ResponsesType } from '@/types/response';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnswerState {
  responses: ResponsesType[];
}

const initialState: AnswerState = {
  responses: [],
};

const answer = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setAnswer(state, action: PayloadAction<AnswerState>) {
      (state.responses = action.payload.responses);
      return state;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const answerActions = { ...answer.actions };

export default answer;
