/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useKeyboardCheck } from '@/hooks/useKeyboardCheck';
import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

const DismissKeyboardView = ({ children }: { children: any }) => {
 
  const check = useKeyboardCheck();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (check) {
          Keyboard.dismiss();
        }
      }}
      accessible={false}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardView;
