import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AuthScreen from "../../../components/global/AuthScreen";
import DismissKeyboardView from "../../../components/global/HideKeyboard";

import { useToast } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../../../components/global/Button";
import { getRespValue } from "../../../design/desin";
import { renderToastError, renderToastSuccess } from "../../../hooks/useToasty";
import { useSignupMutation } from "../../../store/api/signupApi";

export default function Signup() {
  const FirstnameRef = useRef();
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const LastnameRef = useRef();

  const toast = useToast();
  const [signup, { isLoading }] = useSignupMutation();
  const handleUpload = async () => {
    Keyboard.dismiss();
    try {
      const res = await signup({
        firstName: FirstnameRef.current,
        lastName: LastnameRef.current,
        email: emailRef.current,
        password: passwordRef.current,
        confirmPassword: confirmPasswordRef.current,
      }).unwrap();
      router.replace("(main)/Home");
      renderToastSuccess(res?.message || "SignUp Successfully", toast);
    } catch (error) {
      console.log("Signup error", error);
      renderToastError(error?.data?.message || "Something went wrong", toast);
    }
  };
  const handleLogin = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !FirstnameRef.current ||
      !LastnameRef.current ||
      !confirmPasswordRef.current
    ) {
      Alert.alert("Sign Up", "Please enter all fields");
      return;
    }
    //login process
    handleUpload();
  };
  return (
    <AuthScreen title="Signup" topColor="white">
      <ScrollView>
        <View style={{ paddingTop: 20, flex: 1, marginBottom: 50 }}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: Platform.OS === "ios" ? getRespValue(90) : 20,
            }}
            keyboardShouldPersistTaps="handled"
            automaticallyAdjustContentInsets={false}
            scrollEnabled={false}
            // enableAutomaticScroll
            extraHeight={getRespValue(150)}
          >
            <StatusBar style="dark" />
            <DismissKeyboardView>
              <View style={{ flex: 1, gap: 12, alignItems: "center" }}>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/images/login.png")}
                    style={styles.Logo}
                  />
                  <Text style={styles.signInTxt}>Sign Up</Text>
                </View>
                <View style={styles.text}>
                  <Octicons
                    name="browser"
                    size={getRespValue(30)}
                    color="grey"
                  />
                  <TextInput
                    style={styles.txtInput}
                    onChangeText={(value) => (FirstnameRef.current = value)}
                    placeholder="First Name"
                    placeholderTextColor="grey"
                  />
                </View>
                <View style={styles.text}>
                  <Octicons
                    name="browser"
                    size={getRespValue(30)}
                    color="grey"
                  />
                  <TextInput
                    style={styles.txtInput}
                    onChangeText={(value) => (LastnameRef.current = value)}
                    placeholder="Last Name"
                    placeholderTextColor="grey"
                  />
                </View>
                <View style={styles.text}>
                  <Octicons name="mail" size={getRespValue(30)} color="grey" />
                  <TextInput
                    style={styles.txtInput}
                    onChangeText={(value) => (emailRef.current = value)}
                    placeholder="Enter your email"
                    placeholderTextColor="grey"
                  />
                </View>
                <View style={styles.text}>
                  <Octicons name="lock" size={getRespValue(30)} color="grey" />
                  <TextInput
                    style={styles.txtInput}
                    onChangeText={(value) => (passwordRef.current = value)}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="grey"
                  />
                </View>
                <View style={styles.text}>
                  <Octicons name="lock" size={getRespValue(30)} color="grey" />
                  <TextInput
                    style={styles.txtInput}
                    onChangeText={(value) =>
                      (confirmPasswordRef.current = value)
                    }
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    placeholderTextColor="grey"
                  />
                </View>
                <Button
                  buttonType="login"
                  onPress={() => handleLogin()}
                  loading={isLoading}
                  disabled={isLoading}
                >
                  Sign Up
                </Button>

                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                  <Text style={styles.forgotTxt}>
                    Already have an account?{" "}
                  </Text>
                  <TouchableOpacity onPress={() => router.replace("Signin")}>
                    <Text style={{ color: "#36318D", fontSize: 12 }}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
                <Button buttonType="back" onPress={() => router.replace("/")} />
              </View>
            </DismissKeyboardView>
          </KeyboardAwareScrollView>
        </View>
      </ScrollView>
    </AuthScreen>
  );
}
export const styles = StyleSheet.create({
  txtInput: {
    width: "75%",
  },
  Logo: {
    width: getRespValue(300),
    height: getRespValue(200),
  },
  text: {
    gap: getRespValue(25),
    flexDirection: "row",
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    borderColor: "grey",
    padding: 10,
  },
  signInTxt: {
    alignSelf: "center",
    marginTop: getRespValue(30),
      fontSize: 32, 
      fontWeight: 'bold', 
      color: 'orange',
  },
  forgotTxt: {
    color: "grey",
    fontSize: getRespValue(16),
    fontWeight: "600",
  },
});
