/* eslint-disable import/prefer-default-export */

import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import {
  MutationLifecycleApi,
  QueryLifecycleApi,
} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { renderToastError } from '../../hooks/useToasty';
import { setLogout } from '../slices/userSlice';
import { IAPIError } from '../types/userData';

let lastCallTime = 0;

const isTimeExpired = () => {
  const currentTime = Date.now();
  if (currentTime - lastCallTime < 1500) {
    return false;
  }
  lastCallTime = currentTime;
  return true;
};

export const handleLogout = async (
  data: IAPIError | unknown,
  {
    dispatch,
  }: {
    dispatch: ThunkDispatch<unknown, unknown, AnyAction>;
  },
) => {
  console.log('this is the sessione xpired eror', data);
  const error = data?.error?.data || data?.error || data?.data || data;
  if (
    error.message === 'Session Expired' ||
    error.message === 'Login Session Expired'
  ) {
    if (isTimeExpired()) {
      renderToastError(error?.message, null);
    }
    await new Promise(resolve => {
      dispatch(setLogout());
      resolve('Success!');
    });
  }
};

export const onMutationErrorHandler = async (
  args: unknown,
  {
    queryFulfilled,
    dispatch,
  }: MutationLifecycleApi<
    unknown,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      object,
      FetchBaseQueryMeta
    >,
    unknown,
    string
  >,
) => {
  try {
    await queryFulfilled;
  } catch (data: IAPIError | unknown) {
    const error = data?.error?.data || data?.error || data?.data;
    if (error.message === 'Session Expired') {
      if (isTimeExpired()) {
        renderToastError(error?.message, null);
      }
      await new Promise(resolve => {
        dispatch(setLogout());
        resolve('Success!');
      });
    }
  }
};

export const onQueryStartedErrorHandler = async (
  args: unknown,
  {
    queryFulfilled,
    dispatch,
  }: QueryLifecycleApi<
    unknown,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      object,
      FetchBaseQueryMeta
    >,
    unknown,
    string
  >,
) => {
  try {
    await queryFulfilled;
  } catch (data: IAPIError | unknown) {
    const error = data?.error?.data || data?.error || data?.data;

    if (error.message === 'Session Expired') {
      if (isTimeExpired()) {
        renderToastError(error?.message, null);
      }
      await new Promise(resolve => {
        dispatch(setLogout());
        resolve('Success!');
      });
    }
  }
};
