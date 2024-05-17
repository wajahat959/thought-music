import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../global/Header/index'
import Background from '../../global/ImageBackground/index'
const Step1_ChatBot = () => {
  return (
    <Header title='ChatBot'>
      <Background >
    <View style={{flex:1,justifyContent:'center'}}>
      <Text style={{fontSize:30,fontWeight:'700',textAlign:'center',color:'white',}}>ChatBot</Text>
    </View>
    </Background>
    </Header>
  )
}

export default Step1_ChatBot