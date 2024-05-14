import AuthScreen from '@/components/global/AuthScreen';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useToast } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { renderToastError, renderToastSuccess } from '../../../hooks/useToasty';
import { useSelfassessmentMutation } from '../../../store/api/mainApi';
import { setAverageRating } from '../../../store/slices/userSlice';
const Step2_Review= ({goTo}) => {
  const today = new Date();
  const dispatch=useDispatch();
const toast=useToast();
// Format the date as "YYYY-MM-DD"
const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

// console.log(formattedDate);
  const router=useRouter();
  const handleBack =()=>{
    goTo(0)
  }
  const [rating, setRating] = useState(0); // Initial rating value

  const handleStarPress = (value) => {
    setRating(value);
  };

  // Function to submit the rating to your API
  const handleSubmitRating = () => {
    console.log(formattedDate);
    // Call your API with the 'rating' value
    console.log('Submitting rating:', rating);
    // You can include your API call here
  };
const [selfassessment]= useSelfassessmentMutation();
  //api call
  const handleUpload = async () => {
    try {
      const res = await selfassessment({
        date: formattedDate,
        rating: rating,
      }).unwrap();
     dispatch(setAverageRating({data:res?.results}))
     goTo && goTo(3)
     console.log(res?.results)
      renderToastSuccess(res?.message || 'Rating Submitted Successfully', toast);
    } catch (error) {
      console.log('RatingSubmissionError', error);
      renderToastError(error?.data?.message || 'Something went wrong', toast);
    }
  };
  return (
    <AuthScreen>
        <Text style={{
        alignSelf:'center',
        marginBottom:50,
        fontSize:20,
        fontWeight:'bold',
        color:'#000000',
        marginTop:50,
        marginBottom:100,

      }}>Do you want to review yourself?</Text>
    <View style={{flex:1 ,marginTop:10}}>
  
    <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((starValue) => (
          <TouchableOpacity
            key={starValue}
            style={[styles.star, starValue <= rating && styles.selectedStar]}
            onPress={() => handleStarPress(starValue)}
          >
             <FontAwesome
                name={starValue <= rating ? 'star' : 'star-o'} // Use 'star' for filled star and 'star-o' for empty star
                size={40}
                color="black"
                style={styles.star}
              />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={()=>{handleUpload();handleSubmitRating()}}>
        <Text style={styles.submitButtonText}>Submit Rating</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={handleBack}>
        <Text style={styles.submitButtonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={()=>goTo && goTo(3)}>
        <Text style={styles.submitButtonText}>Show Rating</Text>
      </TouchableOpacity>
    </View>
    </AuthScreen>
  )
}

export default Step2_Review
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    alignSelf:'center'
  },
  star: {
  
    marginHorizontal: 5,
    
  },
  selectedStar: {
    backgroundColor: 'gold',
  },
  submitButton: {
    alignItems:'center',
    width:'50%',
   
    alignSelf:'center',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});