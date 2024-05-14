import React, { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Track } from 'react-native-track-player'
type SongInfoProps= PropsWithChildren<{
    track:Track | null | undefined
}>
const SongInfo = ({track}: SongInfoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>{track?.title}</Text>
      <Text style={styles.artist}>{track?.artist} {' '} {track?.album}</Text>
    </View>
  )
}

export default SongInfo
const styles= StyleSheet.create({
    container:{
        flex:1,
        width:'90%',
        flexDirection:'row',
        alignItems:'baseline',
        justifyContent:'center'
    },
    artist:{
        color:'#d9d9d9',
        textAlign:'center'
    },
name:{
        // color:'#d9d9d9',
        marginBottom:8,
        textAlign:'center'
    },
})