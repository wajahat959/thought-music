import Header from "@/components/global/Header/index";
import { getRespValue } from "@/design/desin";
import { selectUser } from "@/store/selectors/userSelect";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import Article from "../../../assets/images/article.png";
import Background from "../../global/ImageBackground/index";
const Home = ({ goTo }) => {
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
  const firstName = currentData?.results?.user?.firstName ?? "";
  const lastName = currentData?.results?.user?.lastName ?? "";

  return (
    <Header>
      <Background>
        <View style={{ flexDirection: "row", margin: getRespValue(15) }}>
          <TouchableOpacity onPress={() => onOpen()}>
            <Ionicons name="person-circle-sharp" size={40} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "700",
              marginLeft: getRespValue(15),
            }}
          >
            Hii {currentData?.results?.user?.firstName}
          </Text>
        </View>
        <Text 
        style={{color: "white",
        fontWeight: "600",
        marginLeft: getRespValue(20),
        marginTop: getRespValue(10),
        fontSize: 15,
        marginBottom: 10,}}
        >Daily check in</Text>
        <View style={{
          height:getRespValue(290) ,
          width:'90%',
          alignSelf:'center',
          padding:getRespValue(10),
          borderColor:'#FAFFF4',
          opacity:0.7,
          borderRadius:30,
          marginBottom:getRespValue(6),
          borderWidth:0.6,}}
          >
        <TouchableOpacity
          style={styles.topCard}
          onPress={() => goTo && goTo(1)}
        >
          <Text style={styles.text}>How was your day?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.topCard}
          onPress={() => goTo && goTo(2)}
        >
          <Text style={styles.text}>Self Assessment</Text>
        </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            marginLeft: getRespValue(20),
            marginTop: getRespValue(10),
            fontSize: 15,
            marginBottom: 10,
          }}
        >
          Suggested for you:
        </Text>
        <TouchableOpacity onPress={() => goTo(3)}>
          <Image
            source={Article}
            style={{
              width: getRespValue(160),
              height: getRespValue(80),
              marginLeft: getRespValue(40),
              opacity:Platform.OS=='ios'?  0.8:1,
            }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: getRespValue(40),
              marginTop: getRespValue(10),
              fontSize: getRespValue(12),
              marginBottom: 10,
            }}
          >
            Journal of Living Together...
          </Text>
        </TouchableOpacity>
      </Background>
      <Modal
        visible={isPlaylistVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {}}
      >
        <Header>
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
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.textInput}>FirstName:</Text>
                  <Text numberOfLines={1} style={styles.text}>
                    {firstName}
                  </Text>
                </View>
                {/* lastName */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.textInput}>LastName:</Text>
                  <Text numberOfLines={1} style={styles.text}>
                    {lastName}
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
                  height: 30,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "#F2F2F2", fontWeight: "500", fontSize: 14 }}
                >
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </Background>
        </Header>
      </Modal>
    </Header>
  );
};

export default Home;

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
    fontSize: 15,
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
    backgroundColor: "#7339BA",
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
    height: "40%",
    // flex:1,
    // flexDirection: "row",
    marginBottom: 10,
  },
  topCard: {
    alignSelf: "center",
    backgroundColor: "#2D2A70",
    opacity: 0.7,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
    padding: getRespValue(10),
    width: "70%", // Adjust width as needed
    shadowColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For iOS
    marginTop: 5,
    height: "10%",
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    // flexDirection: "row",
    marginBottom: getRespValue(10),
  },
  buttonText: {
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff", // Blue text color
  },
});
