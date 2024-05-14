/* eslint-disable no-console */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from '../../constants/Config';
import { IUserState } from '../types/userData';

export const signinApi = createApi({
  reducerPath: 'signinApi',
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.baseURL,
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = (getState() as { user: IUserState }).user;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    ForgetPasswordEmail : builder.mutation({
      query: body => {
        console.log('the api', body);
        return {
          url: '/auth/forgetpassword',
          method: 'POST',
          body
        };
      },
    }), 
   

    signin: builder.mutation({
      query: ({ email,password }) => ({
        url: '/auth/signin',
        method: 'POST',
        body: { email,password },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (e) {
          console.log('query errorr', e);
        }
      },
    }),

    verifySigninOtp: builder.mutation({
      query: ({ otp, otpTypes, email, password }) => ({
        url: '/auth/verifySigninOtp',
        method: 'POST',
        body: { otp, otpTypes, email, password },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (e) {
          console.log('query errorr', e);
        }
      },
    }),

  
  }),
});

export const {
  useSigninMutation,

  useForgetPasswordEmailMutation,

  
} = signinApi;
