import React, { useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AuthScreen from '../../global/AuthScreen';
const tracks =[{
  id:1,
  Url: require('../../../assets/Sound/Humnava.mp3'),
  // url:'https://www.youtube.com/watch?v=2at5ac3Po9g',
  title: 'Humnava',
  artist: 'Humnava',
  artwork: require('../../../assets/SoundImages/humnava.jpeg')
},
{
  id:2,
  Url: require('../../../assets/Sound/Pehli.mp3'),
  title: 'Pehli',
  artist: 'Pehli',
  artwork: require('../../../assets/SoundImages/pehli.jpeg'),
  
},
{
  id:3,
  Url: require('../../../assets/Sound/Arijit.mp3'),
  title: 'Arijit',
  artist: 'Arijit',
  artwork: require('../../../assets/SoundImages/arijit.jpeg')
  
}
];

const Step1_Audio = () => {
  const [sound, setSound] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false); // Added loading state

  useEffect(() => {
    const loadAudio = async () => {
      setLoading(true); // Set loading state to true when loading audio
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync(tracks[currentTrackIndex].Url, {}, updatePlaybackStatus);
      setLoading(false); 
      setSound(newSound);
      setIsPlaying(false);
     // Set loading state to false when audio loading is complete
    };
    loadAudio();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [currentTrackIndex]);

  const updatePlaybackStatus = (status) => {
    setPosition(status.positionMillis);
    setDuration(status.durationMillis);
  };

  const playSound = async () => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const playNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(false);
  };

  const playPreviousTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(false);
  };

  const handleSliderChange = (value) => {
    if (sound) {
      sound.setPositionAsync(value);
    }
  };

  return (
    <AuthScreen>
    <ImageBackground source={tracks[currentTrackIndex].artwork} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>{tracks[currentTrackIndex].title}</Text>
        <Text style={styles.artist}>{tracks[currentTrackIndex].artist}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onSlidingComplete={handleSliderChange}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <View style={styles.controls}>
          <TouchableOpacity onPress={playPreviousTrack} disabled={loading}>
            <Ionicons name="caret-back-circle" size={48} color="white" />
          </TouchableOpacity>
          {loading ? (
            <Ionicons name="refresh-circle" size={64} color="white" /> // Placeholder icon when loading
          ) : isPlaying ? (
            <TouchableOpacity onPress={pauseSound}>
              <Ionicons name="pause-circle-sharp" size={64} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={playSound}>
              <Ionicons name="play-back-circle" size={64} color="white" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={playNextTrack} disabled={loading}>
            <Ionicons name="caret-forward-circle" size={48} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </AuthScreen>
  );
};
export default Step1_Audio
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    marginTop:-8
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  artist: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});