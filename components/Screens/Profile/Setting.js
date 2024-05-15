import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../../store/slices/userSlice';
import AuthScreen from '../../global/AuthScreen';
import Button from '../../global/Button';
 
const Setting = ({goTo}) => {
  const dispatch=useDispatch()
    const router=useRouter();
    const handleLogout =()=>{
dispatch(setLogout());
        router.replace('/')
      }
  return (
    <AuthScreen title='Setting'>
        <View style={{flex:1,marginTop:50,alignItems:'center'}}>
     <View style={{margin:10}}>
   <Button buttonType='simple' onPress={()=> goTo(1)}>Profile</Button>
    </View>
    <View style={{margin:10}}>
   <Button buttonType='simple' onPress={()=> goTo(2)}>Review</Button>
    </View>
    <View style={{margin:10}}>
   <Button buttonType='simple' onPress={()=>goTo(4) }>SelfAssessment</Button>
    </View>
    <View style={{margin:10}}>
   <Button buttonType='simple' onPress={()=>handleLogout() }>Logout</Button>
    </View>
   
    </View>
    </AuthScreen>
  )
}

export default Setting