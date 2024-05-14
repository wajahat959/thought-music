
import { useEffect, useRef } from 'react';
import { BackHandler, View } from 'react-native';
import Step1_Sleep from '../../../components/Screens/Sleep/Step1_Sleep';
import useMultistepForm from '../../../hooks/useMultiStepForm';

const Index = ({ navigation }) => {
  const { step, goTo, back } = useMultistepForm([
  <Step1_Sleep />
  ]);
  const doublePressRef = useRef(false);


 
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
