import React from 'react'
import { Text, View } from 'react-native'
import AuthScreen from '../../global/AuthScreen'

const Step1_ChatBot = () => {
  return (
    <AuthScreen title='ChatBot'>
    <View style={{flex:1,justifyContent:'center'}}>
      <Text style={{fontSize:30,fontWeight:'700',textAlign:'center',color:'orange',}}>ChatBot</Text>
    </View>
    </AuthScreen>
  )
}

export default Step1_ChatBot