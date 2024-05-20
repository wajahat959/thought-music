import Button from "@/components/global/Button";
import Header from "@/components/global/Header";
import Background from "@/components/global/ImageBackground";
import { getRespValue } from "@/design/desin";
import { useFocusEffect, useRouter } from "expo-router";
import { useToast } from "native-base";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, BackHandler, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { renderToastError, renderToastSuccess } from "../../../hooks/useToasty";
import { useSelfassessmentMutation } from "../../../store/api/mainApi";
import { selectUser } from "../../../store/selectors/userSelect";
import { setAverageRating, setLogout } from "../../../store/slices/userSlice";

const Step2_Review = ({ goTo }) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        goTo && goTo(0); // Navigate to step 0
      
        return true; // Prevent default back button behavior
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => backHandler.remove();
    }, [goTo]),
  );
  const today = new Date();
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();
  const [rating, setRating] = useState(0); // Initial rating value
  const { accessToken, currentData } = useSelector(selectUser);
  const [showButton, setShowButton] = useState(true);
  const [result, setResult] = useState('');
  
  const handleBack = () => {
    goTo(0);
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Format as "yyyy-mm-dd"
  };

  const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const labels = ["Awful", "Bad", "Okay", "Good", "Great"]; // Array of labels
console.log('formatedDate',formattedDate)
  // compare dates
  const updatedDate = formatDate((currentData?.results?.user?.updatedAt));

  useEffect(() => {
    if (updatedDate === formattedDate) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [updatedDate, formattedDate]);

  useEffect(() => {
    const avgRating = parseInt(currentData?.results?.averageRating);
    if (!isNaN(avgRating) && avgRating >= 1 && avgRating <= 5) {
      setResult(labels[avgRating - 1]);
    } else {
      setResult('N/A');
    }
  }, [currentData, labels]);

  const handleStarPress = (value) => {
    setRating(value);
  };

  const [selfassessment, { isLoading }] = useSelfassessmentMutation();

  const handleUpload = async () => {
    try {
      const res = await selfassessment({
        date: formattedDate,
        rating: rating,
      }).unwrap();

      dispatch(setAverageRating({ data: res?.results }));

      renderToastSuccess(res?.message || "Rating Submitted Successfully", toast);
    } catch (error) {
      console.log("RatingSubmissionError", error);
      if (error?.data?.message === "jwt expired") {
        dispatch(setLogout());
        router.replace('/');
      }
      renderToastError(error?.data?.message || "Something went wrong", toast);
    }
  };

  return (
    <Header title='Review Rating'>
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
              onPress={handleUpload}
              buttonStyles={styles.button}
            >
              Submit
            </Button>
   

          <View style={styles.card}>
            <View style={styles.infoRow}>
              <Text style={{ fontWeight: "bold", color: "white" }}>Recent Mood:</Text>
              {isLoading ? (
                <ActivityIndicator size={15} color='white' />
              ) : (
                <Text style={{ marginLeft: 10, color: 'white' }}>{result}</Text>
              )}
            </View>
            <View style={styles.infoRow}>
              <Text style={{ marginLeft: 10, color: 'white' }}>Date:</Text>
              <Text style={{ marginLeft: 10, color: 'white' }}>{formatDate(currentData?.results?.latestReview?.date)}</Text>
            </View>
            {/* <View style={styles.infoRow}>
              <Text style={{ marginLeft: 10, color: 'white' }}>Hii {truncate(currentData?.results?.user?.name || '', 12)}</Text>
            </View> */}
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
  infoRow:{
    flexDirection:'row',
    justifyContent:'space-between',marginTop:getRespValue(20)
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
    marginBottom: 30,
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
    backgroundColor: "grey",
  },
  starText: {
    fontSize:getRespValue(22),
    color: "white",
  },
  selectedStarText: {
    color: "black",
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
