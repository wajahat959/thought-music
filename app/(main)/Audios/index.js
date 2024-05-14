/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import { useEffect, useRef } from 'react';
import { BackHandler, View } from 'react-native';

import Step1_Audio from '../../../components/Screens/Audio/Step1_Audio';
import useMultistepForm from '../../../hooks/useMultiStepForm';

const Index = ({ navigation }) => {
  const { step, goTo, currentStepIndex } = useMultistepForm([
 <Step1_Audio />

    
  ]);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (currentStepIndex === 2) {
          goTo && goTo(0);
          return true;
        }
        return false;
      },
    );

    return () => backHandler.remove();
  }, [currentStepIndex, goTo]);
  // doubleTab press get back
  const doublePressRef = useRef(false);
  
  // useEffect(() => {
  //   let timer: string | number | NodeJS.Timeout | undefined;

  //   const handleTabPress = () => {
  //     if (doublePressRef.current) {
  //       if (goTo) goTo(0);
  //       doublePressRef.current = false;
  //     } else {
  //       doublePressRef.current = true;
  //       timer = setTimeout(() => {
  //         doublePressRef.current = false;
  //       }, 300); // Adjust the time frame for double press as needed (300 milliseconds here)
  //     }
  //   };

  //   const unsubscribe = navigation.addListener('tabPress', handleTabPress);

  //   return () => {
  //     clearTimeout(timer);
  //     unsubscribe();
  //   };
  // }, [goTo, navigation]);

  return <View style={{ flex: 1 }}>{step}</View>;
};
export default Index;
