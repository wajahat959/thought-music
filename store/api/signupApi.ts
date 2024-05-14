/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from '../../constants/Config';
import { IAPIError, IUserState } from '../types/userData';
import {
  handleLogout,
  onMutationErrorHandler,
} from '../utils/errorHandler';
import { userData } from './userData';

export const signupApi = createApi({
  reducerPath: 'signupApi',
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.baseURL,
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = (getState() as { user: IUserState }).user;
      console.log('accesstoken', accessToken);
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    signup: builder.mutation({
      query: ({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      
      }) => ({
        url: '/auth/signup',
        method: 'POST',
        body: {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(userData.util.invalidateTags(['getCurrent']));
        } catch (data: IAPIError | any) {
          handleLogout(data, { dispatch });
        } finally {
          // do nothing
        }
      },
    }),
    sendEmailOtp: builder.mutation({
      query: ({ email }) => ({
        url: '/auth/sendEmailOtp',
        method: 'POST',
        body: { email },
      }),
      onQueryStarted: onMutationErrorHandler,
    }),
   
    deleteUser: builder.mutation({
      query: () => ({
        url: '/auth/deleteUser',
        method: 'DELETE',
      }),
      onQueryStarted: onMutationErrorHandler,
    }),
  }),
});

export const {
  useSignupMutation,
  useSendEmailOtpMutation,
  useDeleteUserMutation,
} = signupApi;
