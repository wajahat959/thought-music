import { ScrollView } from "native-base";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/selectors/userSelect";
import AuthScreen from "../../global/AuthScreen";

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
    <AuthScreen title="Profile">
      <ScrollView style={{ flex: 1,backgroundColor:'#1B67A5'}} 
      contentContainerStyle={{justifyContent:'center',marginTop:50}}>
        <View style={styles.card}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.textInput}>Name:</Text>
          <Text numberOfLines={1} style={styles.text}>
            {fullName}
          </Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TextInput style={styles.textInput}>Email:</TextInput>
          <Text numberOfLines={1} style={styles.text}>
          {currentData?.results?.user?.email}
          </Text>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TextInput style={styles.textInput}>Date</TextInput>
          <Text numberOfLines={1} style={styles.text}>
          {formatDate(currentData?.results?.user?.createdAt)}
          </Text>
          </View>
        </View>
      </ScrollView>
    </AuthScreen>
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
