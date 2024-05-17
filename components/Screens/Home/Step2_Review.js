import Button from "@/components/global/Button";
import Header from "@/components/global/Header";
import Background from "@/components/global/ImageBackground";
import { useRouter } from "expo-router";
import { useToast } from "native-base";
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { renderToastError, renderToastSuccess } from "../../../hooks/useToasty";
import { useSelfassessmentMutation } from "../../../store/api/mainApi";
import { selectUser } from "../../../store/selectors/userSelect";
import { setAverageRating, setLogout } from "../../../store/slices/userSlice";

const Step2_Review = ({ goTo }) => {
  const today = new Date();
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();
  const [rating, setRating] = useState(0); // Initial rating value
  const { accessToken, currentData } = useSelector(selectUser);
  const {showButton, setShowButton}= useState(true);
  const handleBack = () => {
    goTo(0);
  };
  //Api date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Format as "yyyy-mm-dd"
  };
  // const { averageRatingData } = useSelector(selectUser);
  // Format the date as "YYYY-MM-DD" Today Data
  const formattedDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const labels = ["Awful", "Bad", "Okay", "Good", "Great"]; // Array of labels


  //compare dates
  const updatedDate=formatDate((currentData?.results?.user?.updatedAt));
const comparison=()=>{
  if(updatedDate===formattedDate){
    setShowButton(false);
  }
}
console.log('comparison',formattedDate,updatedDate)

  const handleStarPress = (value) => {
    setRating(value);
  };

  

  const [selfassessment,{isLoading}] = useSelfassessmentMutation();

  const handleUpload = async () => {
    try {
      const res = await selfassessment({
        date: formattedDate,
        rating: rating,
      }).unwrap();

      dispatch(setAverageRating({ data: res?.results }));

      renderToastSuccess(
        res?.message || "Rating Submitted Successfully",
        toast
      );
    } catch (error) {
      console.log("RatingSubmissionError", error);
      if(error?.data?.message==="jwt expired"){
        dispatch(setLogout())
        router.replace('/')
      }
      renderToastError(error?.data?.message || "Something went wrong", toast);
    }
  };

  return (
    <Header>
      <Background>
        <View style={{ flex: 1, marginTop: 60 }}>
          <Text style={styles.title}>How was your day?</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((starValue) => (
              <TouchableOpacity
                key={starValue}
                style={[
                  styles.star,
                  starValue === rating && styles.selectedStar,
                ]}
                onPress={() => handleStarPress(starValue)}
              >
                <Text
                  style={[
                    styles.starText,
                    starValue === rating && styles.selectedStarText,
                  ]}
                >
                  {labels[starValue - 1]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Button
            buttonType="login"
            loading={isLoading}
            onPress={() => {
              handleUpload();
            
            }}
            buttonStyles={styles.button}
          >
            Submit
          </Button>

          {/* <Button
          buttonType="login"
          onPress={() => handleBack()}
          buttonStyles={styles.button}
        > Back</Button> */}
        <View style={styles.card}>
         <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent:'space-between',        
              marginTop: 10,   
            }}
          >
           
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Average Rating:
          </Text>
          {isLoading?(<View>
         <ActivityIndicator size={15} color='white'></ActivityIndicator>
          </View>):(  <Text style={{ marginLeft: 10,color:'white' }}>
            {parseFloat(currentData?.results?.averageRating).toFixed(2)}
          </Text>)}
        
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent:'space-between',
              
              marginTop: 10,
        
            }}
          >
            <Text style={{ marginLeft: 10,color:'white' }}>Date:</Text>
            <Text style={{ marginLeft: 10,color:'white' }}>
              {formatDate(currentData?.results?.user?.updatedAt)}
            </Text>
          </View>
          </View>
        </View>
      </Background>
    </Header>
  );
};

export default Step2_Review;

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    fontSize: 23,
    shadowColor: "grey",
  
    // marginBottom: 20,
    fontWeight: "700",
    color: "#1588DC",
    fontVariant:'italic'
  
  },
  card: {
    alignSelf: "center",
   
    backgroundColor: "#2D2A70",
    opacity: 0.5,
    borderRadius: 40,
    borderColor: "grey",
    borderWidth: 1,
    padding: 20,
    width: "85%", // Adjust width as needed
    shadowColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For iOS
    marginTop: 20,
    height: "25%",
    // flex:1,
    // flexDirection: "row",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
    color: "white",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  star: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedStar: {
    backgroundColor: "gold",
  },
  starText: {
    fontSize: 16,
    color: "white",
  },
  selectedStarText: {
    color: "gold",
  },
  button: {
    marginTop: 30,
  },
  submitButton: {
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});
