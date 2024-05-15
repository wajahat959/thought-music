import React from 'react';
import { Text, View } from 'react-native';
import AuthScreen from '../../global/AuthScreen';



import { StyleSheet, TouchableOpacity } from 'react-native';

const Step1_Sleep  = () => {
  return (
    <AuthScreen title='Sleep'>
      <View style={styles.container}>
        {/* Circular Button 1 */}
       
        <View style={styles.contentContainer}>
          <Text style={styles.screenTitle}>Sleep Screen</Text>
          {/* Add your AudioScreen content here */}
        </View>
        {/* Circular Button 2 */}
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Sleep Inducer</Text>
        </TouchableOpacity>

        {/* Content */}
        
      </View>
    </AuthScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    width: 250,
    height: 250,
    borderRadius: 150, // half of width and height to make it a circle
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
    marginTop: 70,
    borderWidth: 5, // Add border width
    borderColor: '#ccc', // Border color (gray)
  },
  button2: {
    width: 250,
    height: 250,
    borderRadius: 150, // half of width and height to make it a circle
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90,
    marginTop: 20,
    borderWidth: 5, // Add border width
    borderColor: '#ccc', // Border color (gray)
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTitle: {
    color: '#007BFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 200,
  },
});

export default Step1_Sleep ;
