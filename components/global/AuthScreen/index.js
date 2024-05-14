// components/CommonStyling.js
import { getRespValue } from '@/design/desin';
import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const AuthScreen = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"
      //  backgroundColor="#391F87" 
      backgroundColor='#007BFF'
       />
      <View style={styles.header}>
        <Text style={styles.headerText}>Thought Therapy</Text>
      </View>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
  },
  header: { 
    backgroundColor: '#007BFF',
    padding: getRespValue(25),
    alignItems: 'center',
    borderBottomRightRadius:getRespValue(10),
    borderBottomLeftRadius:getRespValue(10),

  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AuthScreen;
