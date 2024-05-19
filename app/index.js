import { Redirect, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Background from "../components/global/ImageBackground";
import { getRespValue } from "../design/desin";
import { selectUser } from "../store/selectors/userSelect";
const Home1 = () => {
  const router = useRouter();
const {accessToken}= useSelector(selectUser);

if(accessToken){
  return(<Redirect href="(main)/Home" />)
}
  return (
   <Background>
      <View style={{ alignItems: "center", paddingHorizontal: 20,flex:1}}>
        <Image source={require('../assets/icons/TTLogo.png')}
        style={{width:'30%',height:'20%',marginTop:20}}
        />
        <Text style={{ fontSize: getRespValue(48), marginBottom:getRespValue(70),marginTop:getRespValue(10), color: "white", fontWeight: "bold" }}>
          Welcome
        </Text>
        <TouchableOpacity
          onPress={() => router.replace("/(auth)/Signin")}
          style={{
            backgroundColor: "purple",
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 8,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("/(auth)/Signup")}
          style={{
            backgroundColor: "#D8A3DD",
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 8,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => router.replace("/(main)/Home")}
          style={{
            backgroundColor: "#e67e22",
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Continue</Text>
        </TouchableOpacity> */}
      </View>
  </Background>
  );
};

export default Home1;
