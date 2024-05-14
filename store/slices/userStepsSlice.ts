/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  IdType: string;
  errorType: string;
  keyboardOpened: boolean;
} = {
  IdType: '',
  errorType: '',
  keyboardOpened: false,
};

const userStepsSlice = createSlice({
  name: 'userSteps',
  initialState,
  reducers: {
    userSelection: (state, action) => {
      (state as any).IdType = action.payload.IdType;
    },
    errorSelection: (state, action) => {
      (state as any).errorType = action.payload.errorType;
    },
    keyboardOpened: (state, action) => {
      (state as any).keyboardOpened = action.payload;
    },
  },
});

export const { userSelection, errorSelection, keyboardOpened } =
  userStepsSlice.actions;
export default userStepsSlice.reducer;
