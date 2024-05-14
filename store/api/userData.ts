/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from '../../constants/Config';
import { IAPIError, IUserState } from '../types/userData';
import { handleLogout } from '../utils/errorHandler';

export const userData = createApi({
  reducerPath: 'userData',
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.baseURL,
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = (getState() as { user: IUserState }).user;
      console.log('this is api test token currrent data:', accessToken);
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['getCurrent'],
  endpoints: builder => ({
    currentUser: builder.query({
      query: () => ({
        url: '/auth/current',
        method:'GET'
      }),
      providesTags: ['getCurrent'],
      // keepUnusedDataFor: 2,

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (data: IAPIError | any) {
          console.log('current failed', data);
          handleLogout(data, { dispatch });
        } finally {
          // do nothing
        }
      },
    }),
  }),
});

export const { useCurrentUserQuery } = userData;
