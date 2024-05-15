
import { setSoundPause } from '@/store/slices/userSlice';
import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Home from '../../../components/Screens/Home/Home';
import useMultistepForm from '../../../hooks/useMultiStepForm';
const HomeM = () => {
  
const dispatch=useDispatch();
 

  const { step, goTo } = useMultistepForm([
  <Home />,

  ]);
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', () => {
  //     if (goTo) goTo(0);
  //   });

  //   return unsubscribe;
  // }, [goTo, navigation]);
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
