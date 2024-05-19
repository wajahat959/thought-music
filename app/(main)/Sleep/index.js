import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../../components/global/Header';
import Background from '../../../components/global/ImageBackground';

const Step1_Sleep  = ({navigation}) => {
  const router=useRouter()
  return (
  <Header title='Sleep'>
    <Background>
      <View style={styles.container}>
        {/* Circular Button 1 */}
       
        <View style={styles.contentContainer}>
          <Text style={styles.screenTitle}>Sleep Screen</Text>
          {/* Add your AudioScreen content here */}
        </View>
        {/* Circular Button 2 */}
        <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate("Audios")}>
          <Text style={styles.buttonText}>Sleep Inducer</Text>
        </TouchableOpacity>

        {/* Content */}
        
      </View>
      </Background>
      </Header>
  );
};

const styles = StyleSheet.create({
  container: {
   marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    width: 250,
    height: 250,
    borderRadius: 150, // half of width and height to make it a circle
    backgroundColor: '#4B1B86',
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
    backgroundColor: '#4B1B86',
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
