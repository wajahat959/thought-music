import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import backarrow from '../../../assets/icons/arrow-left-red.png';
import { getRespValue } from "../../../design/desin";
const Button = (props) => {
  const {
    buttonStyles,
    children,
    loading,
    light,
    buttonType,
    disabled,
    className,
    color,
    onPress,
    ...others
  } = props;

  const Simple = () => {
    const [isPressed, setIsPressed] = useState(false);
    return (
      <Pressable
        disabled={disabled}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={onPress}
        style={{
          ...styles.simple,
          ...buttonStyles,
          backgroundColor: isPressed ? "" : "#D9D9D9",
        }}
      >
        {loading ? (
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="small" color="#000" />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              paddingHorizontal: 3,
            }}
          >
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ color: "#000F6D", opacity: disabled ? 5 : 10 }}
            >
              {children}
            </Text>
          </View>
        )}
      </Pressable>
    );
  };
  const Login = () => {
    const [isPressed, setIsPressed] = useState(false);
    return (
      <Pressable
        disabled={disabled}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={onPress}
        style={{
          ...styles.login,
          ...buttonStyles,
          backgroundColor: isPressed ? "grey" : "#B6A2CF",
        }}
      >
        {loading ? (
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="small" color="#000" />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              paddingHorizontal: 3,
            }}
          >
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ color: "black", opacity: disabled ? 10 : 5 }}
            >
              {children}
            </Text>
          </View>
        )}
      </Pressable>
    );
  };
  const Back = () => {
    return (
      <Pressable
        disabled={disabled}
        onPress={onPress}
        // style={{
        //   ...styles.login,
        //   // ...buttonStyles,
        //   // backgroundColor: 'red'

        // }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 3,
          }}
        >
          <Image
            source={backarrow}
            alt="ajsjas"
            resizeMode="contain"
            style={{
              height: getRespValue(30),
              width: getRespValue(15),
            }}
          />
          <Text
            style={{
              fontSize: getRespValue(24),
              color: "red",
            }}
          >
            Back
          </Text>
        </View>
      </Pressable>
    );
  };
  const views = {
    simple: Simple,
    back: Back,
    // large: Large,
    // xsm: xSmall,
    // xlarge: xLarge,
    login: Login,
  };
  const CurrentView = views[buttonType];
  return <CurrentView />;
};

export default Button;
const styles = StyleSheet.create({
  simple: {
    height: getRespValue(47),
    width: getRespValue(200),
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
  },
  login: {
    height: getRespValue(47),
    width: getRespValue(250),
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    alignSelf: "center",
  },
});
