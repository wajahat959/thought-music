import { combineReducers } from '@reduxjs/toolkit';

import { mainApi } from './api/mainApi';
import { signinApi } from './api/signinApi';
import { signupApi } from './api/signupApi';
import { userData } from './api/userData';
import mainSlice from './slices/mainSlice';
import userReducer from './slices/userSlice';

import userStepsSlice from './slices/userStepsSlice';
// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  user: userReducer,
  userSteps: userStepsSlice,
  payee: mainSlice,

  
  [userData.reducerPath]: userData.reducer,
  [signinApi.reducerPath]: signinApi.reducer,
  [signupApi.reducerPath]: signupApi.reducer,
  [mainApi.reducerPath]: mainApi.reducer,
});
