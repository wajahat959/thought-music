// Background.js
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children, source }) => {
  return (
    <ImageBackground source={require('../../../assets/images/BG.png')} style={styles.background}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor:'#171938' // or 'stretch' or 'contain'
  },
});

export default Background;
