import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/selectors/userSelect";
import Header from "../../global/Header";
import Background from "../../global/ImageBackground";
const Step1_Profile = () => {
  const { currentData } = useSelector(selectUser);
  const firstName = currentData?.results?.user?.firstName ?? "";
  const lastName = currentData?.results?.user?.lastName ?? "";
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Format as "yyyy-mm-dd"
  };
  let fullName = firstName + " " + lastName;

  if (fullName.length > 16) {
    fullName = fullName.substring(0, 16) + "...";
  }
  return (
    <Header title='Profile'>
    <Background>
      <View style={styles.modalContainer}>
        <View>
          <Ionicons name="person-circle-sharp" size={200} color="white" />
        </View>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: getRespValue(40),
            }}
          >
            {currentData?.results?.user?.firstName}{" "}
            {currentData?.results?.user?.lastName}
          </Text>
        </View>
        <View style={styles.card}>
          {/* Name */}
        <View style={{flexDirection:'row',justifyContent:'space-between',}}>
    <Text style={styles.textInput}>FirstName:</Text>
    <Text numberOfLines={1} style={styles.text}>
    {firstName}
    </Text>
 </View>
 {/* lastName */}
 <View style={{flexDirection:'row',justifyContent:'space-between',}}>
    <Text style={styles.textInput}>LastName:</Text>
    <Text numberOfLines={1} style={styles.text}>
    {lastName}
    </Text>
 </View>
          {/* Email */}
        <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
    <Text style={styles.textInput}>Email:</Text>
    <Text numberOfLines={1} style={styles.text}>
    {currentData?.results?.user?.email}
    </Text>
 </View>
        </View>

    
        <TouchableOpacity
          onPress={() => onClose()}
          style={{
            borderWidth: 1,
            backgroundColor: "#7339BA",
            opacity: 0.6,
            borderRadius: 20,
            width: 90,
            shadowColor: "white",
            alignContent: "center",
            alignItems: "center",
            borderColor: "grey",
            height:30,
            justifyContent:'center'
          }}
        >
          <Text style={{ color: "#F2F2F2",fontWeight:'500', fontSize: 14 }}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  </Header>
  );
};

export default Step1_Profile;
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
  text: {
    margin: 10,
    fontSize: 22,
    fontWeight: "600",
    color: 'black',
  },
  card: {
    alignSelf: "center",
    justifyContent:'space-between',
    backgroundColor: "#EFE1E6",
    borderRadius: 10,
    padding: 20,
    width: "85%", // Adjust width as needed
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For iOS
    marginTop: 20,
    // flexDirection: "row",
    marginBottom: 10,
  },
});
