
import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Setting from '../../../components/Screens/Profile/Setting';
import ShowReviewRating from '../../../components/Screens/Profile/ShowReviewRating';
import Step1_Profile from '../../../components/Screens/Profile/Step1_Profile';
import Step2_Review from '../../../components/Screens/Profile/Step2_Review';
import useMultistepForm from '../../../hooks/useMultiStepForm';

const Profile= ({navigation}) => {
  
useEffect
 
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
  const { step, goTo } = useMultistepForm([
    <Setting />,
    <Step1_Profile />,
    <Step2_Review />,
    <ShowReviewRating />,
  
  ]);
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', () => {
  //     if (goTo) goTo(0);
  //   });

  //   return unsubscribe;
  // }, [goTo, navigation]);
  const doublePressRef = useRef(false);

 
  return (
    <View style={{ flex: 1 }}>
{step}
    </View>
  );
};

export default Profile;
