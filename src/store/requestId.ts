import { QuestionType } from '@/types/question';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RequestIdState {
  userId: number,
  userCode: string,
}

const initialState: RequestIdState = {
  userId: 0,
  userCode: '',
};

const requestId = createSlice({
  name: 'requestId',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<number>) {
      state.userId = action.payload;
      return state;
    },
    setUserCode(state, action: PayloadAction<string>) {
      state.userCode = action.payload;
      return state;
    },
  },
});

export const requestIdActions = { ...requestId.actions };

export default requestId;
