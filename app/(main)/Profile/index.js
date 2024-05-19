import Header from "@/components/global/Header/index";
import { getRespValue } from "@/design/desin";
import { selectUser } from "@/store/selectors/userSelect";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Background from "../../../components/global/ImageBackground";
const Index = ({ goTo }) => {
  const router = useRouter();
  const [pressed, setPressed] = useState(false);
  const { currentData } = useSelector(selectUser);
  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);

  const onClose = (index) => {
    setIsPlaylistVisible(false);
  };
  const onOpen = (index) => {
    setIsPlaylistVisible(true);
  };
  const name = currentData?.results?.user?.name ?? "";
  const lastName = currentData?.results?.user?.lastName ?? "";
  if (name.length > 16) {
    name = name.substring(0, 16) + "...";
  }
  return (
    <Header title='Profile'>
      <Background>
        <View style={styles.modalContainer}>
          <View>
            <Ionicons name="person-circle-sharp" size={150} color="white" />
          </View>
          <View style={{marginBottom:getRespValue(40)}}>
            <Text
              style={{
                color: "white",
                fontSize: getRespValue(35),
              }}
            >
              {name}
            </Text>
          </View>
          <View style={styles.card}>
            {/* Name */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textInput}>Name:</Text>
              <Text numberOfLines={1} style={styles.text}>
                {name}
              </Text>
            </View>

         
            {/* Email */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={styles.textInput}>Email:</Text>
              <Text numberOfLines={1} style={styles.text}>
                {currentData?.results?.user?.email}
              </Text>
            </View>
          </View>
        </View>
      </Background>
    </Header>
  );
};

export default Index;

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    fontSize: 18,

    fontWeight: "600",
    color: "white",
    fontVariant: "italic",
  },
  text: {
    margin: 10,
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333", // Dark gray text color
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: "#007bff", // Blue border color
    width: "60%",
    borderRadius: 20,
    overflow: "hidden", // Ensure border radius works
    alignItems: "center", // Center the child horizontally
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  card: {
    alignSelf: "center",
    justifyContent: "space-between",
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
    height: "30%",
    // flex:1,
    // flexDirection: "row",
    marginBottom: 10,
  },
  buttonText: {
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff", // Blue text color
  },
});
