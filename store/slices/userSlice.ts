/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { signinApi } from '../api/signinApi';
import { signupApi } from '../api/signupApi';
import { userData } from '../api/userData';
import { RootState } from '../store';
import { IUserState } from '../types/userData';
// Initial state
const initialState: IUserState = {
  accessToken: '',
  data: null,
  // authModal: false,
  codeCountry: '',
  setCountry: '',
  email: '',
  signUpPhone: '',
  uploadData: null,
  loading: false,
  error: null,
  phoneNumber: '',
  averageRatingData:{
    averageRating:0,
    rating:0,
    date:'',
    },
  currentData: null,
};

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the authentication status
    userSignin: (state, action) => {
      (state as any).email = action.payload.email;
      (state as any).phoneNumber = action.payload.phoneNumber;
      state.accessToken = action.payload.accessToken;
    },
    userSignup: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      // state.phone = action.payload.phone;
    },

    setAuthState(state, action) {
      state.accessToken = action.payload.accessTokens;
      console.log('redux token',state.accessToken)
    },
    setAverageRating: (state, action) => {
      state.averageRatingData = action.payload.data;
    },
    setLogout: state => {
      state.data = null;
      state.accessToken = '';
      state.error = null;
      state.email = '';
      state.phoneNumber = '';
      state.loading = false;
     
      state.currentData = null;
    },
    // setShowAuthModal(state) {
    //   state.authModal = true;
    // },
    // setHideAuthModal(state) {
    //   state.authModal = false;
    // },
    userSetCountry: (state, action) => {
      state.setCountry = action.payload.setCountry;
      state.codeCountry = action.payload.codeCountry;
      console.log('redux country data', state.setCountry);
    },
    userResetCountry: state => {
      state.setCountry = '';
    },
    signupPhone: (state, action) => {
      state.signUpPhone = action.payload.signupPhone;
    },
    resetPhoneNumber: state => {
      state.signUpPhone = '';
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      signinApi.endpoints.signin.matchFulfilled,
      (state, { payload }) => {
        // state.accessToken = payload.data.accessToken;
        state.data = payload.data;
      },
    );

    builder.addMatcher(
      signupApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        // state.accessToken = payload.data.accessToken;
        state.data = payload.data;
      },
    );
    builder.addMatcher(
      userData.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        // state.gbg = payload.data.gbg;
        console.log('the current data', payload);
        state.currentData = payload;
      },
    );
  },
});

export const {
  setAverageRating,
  userSignin,
  userSignup,
  setAuthState,
  setLogout,
  userSetCountry,
  userResetCountry,
  signupPhone,
  resetPhoneNumber,

  // setChangeRoute,
  // setHideAuthModal,
  // setShowAuthModal,
} = userSlice.actions;

export const selectUserState = (state: RootState) => state.user;

// export const selectUserAuthModal = (state: RootState) => state.user.authModal;

export default userSlice.reducer;
