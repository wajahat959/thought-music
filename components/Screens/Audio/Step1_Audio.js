import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const tracks = [
  {
    id: 1,
    Url: require('../../../assets/Sound/Humnava.mp3'),
    title: 'Humnava',
    artist: 'Humnava',
    artwork: require('../../../assets/SoundImages/humnava.jpeg')
  },
  {
    id: 2,
    Url: require('../../../assets/Sound/Pehli.mp3'),
    title: 'Pehli',
    artist: 'Pehli',
    artwork: require('../../../assets/SoundImages/pehli.jpeg')
  },
  {
    id: 3,
    Url: require('../../../assets/Sound/Arijit.mp3'),
    title: 'Arijit',
    artist: 'Arijit',
    artwork: require('../../../assets/SoundImages/arijit.jpeg')
  },
  // {
  //   id: 4,
  //   Url: require('../../../assets/Sound/Moosewala.mp3'),
  //   title: 'Legend',
  //   artist: 'Moosewala',
  //   artwork: require('../../../assets/SoundImages/legend.jpg')
  // },
  {
    id: 4,
    Url: require('../../../assets/Sound/12Saal.mp3'),
    title: '12 Saal',
    artist: 'Bilal Saeed',
    artwork: require('../../../assets/SoundImages/12Saal.jpg')
  },
  {
    id: 5,
    Url: require('../../../assets/Sound/bilalSaeed.mp3'),
    title: 'Uchiyan Dewaran',
    artist: 'Bilal Saeed',
    artwork: require('../../../assets/SoundImages/uchiyan.jpg')
  },
];

const Step1_Audio = () => {
  const [sound, setSound] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);

  useEffect(() => {
    const loadAudio = async () => {
      setLoading(true);
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync(tracks[currentTrackIndex].Url, {}, updatePlaybackStatus);
      setLoading(false);
      setSound(newSound);
      setIsPlaying(false);
      
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

  const selectTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaylistVisible(false);
  };

  return (
    <>
      <ImageBackground resizeMode='repeat' source={tracks[currentTrackIndex].artwork} style={styles.backgroundImage}>
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
            disabled={loading}
          />
          <View style={styles.controls}>
            <TouchableOpacity onPress={playPreviousTrack} disabled={loading}>
              <Ionicons name="caret-back-circle" size={48} color="white" />
            </TouchableOpacity>
            {loading ? (
              <Ionicons name="refresh-circle" size={64} color="white" />
            ) : isPlaying ? (
              <TouchableOpacity onPress={pauseSound}>
                <Ionicons name="pause-circle-sharp" size={64} color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={playSound}>
                <Ionicons name="play-back-circle" size={64} color="white" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={playNextTrack} disabled={loading} >
              <Ionicons name="caret-forward-circle" size={48} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsPlaylistVisible(true)} disabled={loading} >
              <Ionicons name="add-circle-sharp" size={32} color={loading?'grey':'white'}  />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <Modal
        visible={isPlaylistVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsPlaylistVisible(false)}
      >
        <View style={styles.playlistContainer}>
          <TouchableOpacity onPress={() => setIsPlaylistVisible(false)} style={styles.closeButton} >
            <Ionicons name="close-circle" size={32} color="white" />
          </TouchableOpacity>
          {tracks.map((track, index) => (
            <TouchableOpacity key={track.id} onPress={() => selectTrack(index)} style={[styles.playlistItem, index === currentTrackIndex && styles.currentTrack]}>
              <Text style={{ color: 'white' ,fontSize:22}}>{track.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </>
  );
};

export default Step1_Audio;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    marginTop: -8
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
  playlistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingTop: 50,
  },
  playlistItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
  currentTrack: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
