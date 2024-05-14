import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


const Welcome = () => {
    const router = useRouter()
  return (
    <View style={{flex:1,marginTop:100}}>
      <Text style={{color:'red'}}>welcome</Text>
      <Button title='Home' onPress={()=>router.replace('/')} >Next</Button>
    </View>
  )
}

export default Welcome