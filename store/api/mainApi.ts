/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from '../../constants/Config';
import { IAPIError, IPayeeState } from '../types/userData';
import {
  handleLogout
} from '../utils/errorHandler';
import { userData } from './userData';

export const mainApi = createApi({
  reducerPath: 'Api',
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: Config.baseURL,
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = (getState() as { user: IPayeeState }).user;
      console.log('Kyc AccessToken :', accessToken);

      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  // tagTypes: ['getCountry'],
  endpoints: builder => ({
    selfassessment: builder.mutation({
      query: ({
    date,rating

      }) => {
        return {
          url: '/self-assessment/goal',
          method: 'POST',
          body: { date, rating},
        };
      },
      // providesTags: ['getCountry'],
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
    
  }),
});

export const { 
useSelfassessmentMutation,

} = mainApi;
