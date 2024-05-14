/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import * as Burnt from 'burnt';
import { Toast as ToastDef } from 'native-base';
import React from 'react';
import { Platform } from 'react-native';
import Toast from '../components/global/Toast';

export const renderToastSuccess = (title: string, toast: any) => {
  // make first letter uppercase
  const titleNew =
    (title?.charAt(0).toUpperCase() || '') + (title?.slice(1) || '');

  if (Platform.OS === 'ios') {
    return Burnt.toast({
      title: titleNew,
      preset: 'done',
      from: 'bottom',
      shouldDismissByDrag: true,
      haptic: 'success',
      duration: 3,
    });
  }
  if (Platform.OS === 'android') {
    return Burnt.toast({
      title: titleNew,
      preset: 'done',
      from: 'bottom',
      shouldDismissByDrag: true,
      haptic: 'success',
      duration: 3,
    });
  }
  return ToastDef.show({
    duration: 2000,
    render: ({ id }: { id: any }) => {
      return (
        <Toast
          {...{
            id,
            success: true,
            title,
            variant: 'solid',
            isClosable: true,
            toast,
          }}
        />
      );
    },
  });
};
// Below code is used to change any message Globally
// const titleNew =title === 'Token is Invalid'? 'Login Expire':
// (title?.charAt(0).toUpperCase() || '') + (title?.slice(1) || '');

export const renderToastError = (title: string, toast: any) => {
  const titleNew =
    (title?.charAt(0).toUpperCase() || '') + (title?.slice(1) || '');

  if (Platform.OS === 'ios') {
    return Burnt.toast({
      title: titleNew,
      preset: 'error',
      from: 'bottom',
      shouldDismissByDrag: true,
      haptic: 'error',
      duration: 3,
    });
  }
  if (Platform.OS === 'android') {
    return Burnt.toast({
      title: titleNew,
      preset: 'error',
      from: 'bottom',
      shouldDismissByDrag: true,
      haptic: 'error',
      duration: 3,
    });
  }
  return ToastDef.show({
    duration: 2000,
    render: ({ id }: { id: any }) => {
      return (
        <Toast
          {...{
            id,
            error: true,
            title,
            variant: 'solid',
            isClosable: true,
            toast,
          }}
        />
      );
    },
  });
};

export const renderAlertSuccess = (title: string, message?: string) => {
  return Burnt.alert({
    title,
    message,
    preset: 'done',
    duration: 2,
    shouldDismissByTap: true,
  });
};

export const renderAlertError = (title: string, message?: string) => {
  return Burnt.alert({
    title,
    message,
    preset: 'error',
    duration: 2,
    shouldDismissByTap: true,
  });
};
