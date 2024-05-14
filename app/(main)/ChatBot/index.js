/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-expressions */
/* eslint-disable spaced-comment */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import useMultistepForm from '../../../hooks/useMultiStepForm';
// import { AnimatePresence } from 'moti';
import { useEffect, useRef } from 'react';
import { BackHandler, View } from 'react-native';
import Step1_ChatBot from '../../../components/Screens/ChatBot/Step1_ChatBot';

const Index = ({ navigation }) => {
  const { step, goTo, back } = useMultistepForm([
    <Step1_ChatBot />
  ]);
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', () => {
  //     if (goTo) goTo(0);
  //   });
  //   return unsubscribe;
  // }, [goTo, navigation]);

  const doublePressRef = useRef(false);
  //This is TabPageState



  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (back) back();
        return true;
      },
    );
    return () => backHandler.remove();
  }, [back]);

  return (
    <View style={{ flex: 1 }}>
      {step}
    </View>
  );
};
export default Index;
