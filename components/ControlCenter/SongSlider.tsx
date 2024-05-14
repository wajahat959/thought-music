import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useProgress } from 'react-native-track-player';
const SongSlider = () => {
    const { position, duration } = useProgress()
  return (
    <View>
     <Slider 
     value={position}
     minimumValue={0}
     maximumValue={duration}
     thumbTintColor='#FFF'
     maximumTrackTintColor='#FFF'
     style={styles.sliderContainer}
     />
       <View style={styles.timeContainer}>
        <Text style={styles.time}>{new Date(position*1000).toDateString().substring(15,19)}</Text>
        <Text style={styles.time}>{new Date((duration-position)*1000).toDateString().substring(15,19)}</Text>
    
    </View>
    </View>
  
  )
}

export default SongSlider
const styles= StyleSheet.create({
sliderContainer:{
    width:350,
    height:40,
    marginTop:10,
    flexDirection:'row'
},
timeContainer:{
    width:350,
    // height:40,
    marginTop:10,
    justifyContent:'space-between',
    flexDirection:'row'
},
time:{
    color:'red'
}
})