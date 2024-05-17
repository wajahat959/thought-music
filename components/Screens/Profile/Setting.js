import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../../store/slices/userSlice';
import Button from '../../global/Button/index';
import Header from '../../global/Header';
import Background from '../../global/ImageBackground';
const Setting = ({goTo}) => {
  const dispatch=useDispatch()
    const router=useRouter();
    const handleLogout =()=>{
dispatch(setLogout());
        router.replace('/')
      }
  return (
   <Header >
    <Background>
        <View style={{flex:1,marginTop:50,alignItems:'center'}}>
{/*     
    <View style={{margin:10}}>
   <Button buttonType='simple' onPress={()=> goTo(2)}>Review</Button>
    </View>*/}
    <View style={{margin:10}}>
   <Button buttonType='simple' onPress={()=>goTo(4) }>Profile</Button>
    </View>  
  <View style={{margin:10}}>
    <Button buttonType='simple' onPress={()=>handleLogout() }>Logout</Button>
    </View>
   
    </View>
    </Background>
   </Header>
  )
}

export default Setting