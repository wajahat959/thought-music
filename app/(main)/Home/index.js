
import Articles from '@/components/Screens/Home/Articles';
import SelfAssessment from '@/components/Screens/Home/SelfAssessment';
import Step2_Review from '@/components/Screens/Home/Step2_Review';
import { setSoundPause } from '@/store/slices/userSlice';
import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Home from '../../../components/Screens/Home/Home';
import useMultistepForm from '../../../hooks/useMultiStepForm';
const HomeM = ({navigation}) => {
  
const dispatch=useDispatch();
 

  const { step, goTo } = useMultistepForm([
  <Home />,
  <Step2_Review />,
  <SelfAssessment />,
  <Articles />

  ]);
  useEffect(() => {
    let timer

    const handleTabPress = () => {
      if (doublePressRef.current) {
        if (goTo) goTo(0);
        doublePressRef.current = false;
      } else {
        doublePressRef.current = true;
        timer = setTimeout(() => {
          doublePressRef.current = false;
        }, 300); // Adjust the time frame for double press as needed (300 milliseconds here)
      }
    };

    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, [goTo, navigation]);
  const doublePressRef = useRef(false);
useEffect(()=>{
  dispatch(setSoundPause(true))
  
},[])
 
  return (
    <View style={{ flex: 1 }}>
{step}
    </View>
  );
};

export default HomeM;
