
import Articles from '@/components/Screens/Home/Articles';
import Articles2 from '@/components/Screens/Home/Articles2';
import Articles3 from '@/components/Screens/Home/Articles3';
import Articles4 from '@/components/Screens/Home/Articles4';
import SelfAssessment from '@/components/Screens/Home/SelfAssessment';
import Step2_Review from '@/components/Screens/Home/Step2_Review';
import { useCurrentUserQuery } from '@/store/api/userData';
import { selectUser } from '@/store/selectors/userSelect';
import { setSoundPause } from '@/store/slices/userSlice';
import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../../../components/Screens/Home/Home';
import useMultistepForm from '../../../hooks/useMultiStepForm';

const HomeM = ({navigation}) => {
  
const dispatch=useDispatch();
const { accessToken } = useSelector(selectUser); 
const { 
  isLoading: currentLoading,
  refetch,
  isFetching: currentFetching,
} = useCurrentUserQuery(null, {
  skip: !accessToken,
});

  const { step, goTo } = useMultistepForm([
  <Home />,
  <Step2_Review />,
  <SelfAssessment />,
  <Articles />,
  <Articles2 />,
  <Articles3 />,
  <Articles4 />
  

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
