import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/selectors/userSelect";
import AuthScreen from "../../global/AuthScreen";

const ShowReviewRating = () => {
//   const { averageRatingData } = useSelector(selectUser);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Format as "yyyy-mm-dd"
  };
  const {  currentData,averageRatingData } = useSelector(selectUser);

  console.log("current Data Data", currentData);


  return (
    <AuthScreen title='Rating Score'>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          Review Rating
        </Text>
        {currentData && (
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Rating:</Text>
              <Text style={{ marginLeft: 10 }}>
                {averageRatingData?.rating}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Average Rating:</Text>
              <Text style={{ marginLeft: 10 }}>
                {parseFloat(currentData?.results.averageRating).toFixed(2)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Date:</Text>
              <Text style={{ marginLeft: 10 }}>
                {formatDate(currentData?.results?.user?.updatedAt)}
              </Text>
            </View>
          </>
        )}
      </View>
    </AuthScreen>
  );
};

export default ShowReviewRating;