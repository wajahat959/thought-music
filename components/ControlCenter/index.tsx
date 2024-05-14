import { Pressable } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import {playBackService} from '@/musicPlayerService'
import { Ionicons } from '@expo/vector-icons';
const ControlCenter = () => {
    const playBackState=usePlaybackState();
    const skipToNext=async()=>{
        await TrackPlayer.skipToNext();
    }
    const skipToPrevious=async()=>{
        await TrackPlayer.skipToPrevious();
    }
    const togglePlayBack=async(playback:State)=>{
        const currentTrack= await TrackPlayer.getCurrentTrack()
        if(currentTrack !==null){
            if(playback===State.Paused || playback===State.Ready){
            await TrackPlayer.play()
            }else{
                await TrackPlayer.pause()
            }
        }
    }
  return (
    <View >
          <Pressable  onPress={skipToPrevious}>
          <Ionicons name='caret-back-circle'  size={40} />
          </Pressable>
          <Pressable onPress={()=>togglePlayBack}>
         
          
     <Ionicons name={playBackState ===State.Playing?'pause-circle-sharp':'play-back-circle'} size={75} color='black' />
   
    </Pressable>
    <Pressable onPress={skipToNext}>
    <Ionicons name='caret-forward-circle' size={40} color='black' />
    </Pressable>
  
  
    </View>
  )
}

export default ControlCenter
const  styles=StyleSheet. create({
    container:{
marginBottom:56,
flex:1,
flexDirection:'row',
alignItems:'center'
    },
    icon:{  color:'#ffffff',
        
    }
})