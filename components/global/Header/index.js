/* eslint-disable react/jsx-props-no-spreading */
// import News from "@/assets/icons/News.png";
// import Option from "@/assets/icons/options.png";
import file from '@/assets/icons/file.png';
import turnOff from '@/assets/icons/turnoff.png';
import { getRespValue } from "@/design/desin";
import { setLogout } from "@/store/slices/userSlice";
import { useRouter } from "expo-router";
import { useMemo } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  View as ViewDef,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
const Header = (props) => {
  const {
    scroll,
    title,
    className,
    children,
    topColor,
    bottomColor,
    style,
    disableBottomSafeArea,
    disableTopSafeArea,
    disableAppBar,
    darkStatus,

    label,
    ...rest
  } = props;

  const { top, bottom } = useSafeAreaInsets();

  const paddingTop = useMemo(
    () => (Platform.OS === "android" ? top * 1.0 : top),
    [top]
  );
  const router=useRouter();
const dispatch=useDispatch();
const handleLogout=()=>{
  dispatch(setLogout());
  router.replace("/");
}
  if (scroll)
    return (
      <SafeAreaView edges={["top", "bottom"]} style={{ flex: 1 }}>
        <ScrollView>
          <ViewDef {...rest}>{children}</ViewDef>
        </ScrollView>
      </SafeAreaView>
    );

  return (
    <>
      <StatusBar barStyle={darkStatus ? "dark-content" : "light-content"} />

      <ViewDef
        {...rest}
        style={{
          flex: 1,
          backgroundColor: "white",
          ...style,
        }}
        className={`flex-1 ${className}`}
      >
        {!disableTopSafeArea && <View style={{ backgroundColor: topColor }} />}
        {!disableAppBar && (
          <View
            style={{
              paddingHorizontal: getRespValue(30),
              paddingTop: getRespValue(70),
              flexDirection: "row",
              backgroundColor: "#171938",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{
                width: getRespValue(30),
                height: getRespValue(30),
                //   marginLeft: getRespValue(10),
                opacity:0.7,
              }}
              source={file}
            />
            <Text
              style={{
                fontSize: getRespValue(28),
                justifyContent: "center",
                textAlign: "center",
                alignSelf: "center",
                marginBottom: getRespValue(10),
                // fontFamily:'SpaceMono-Regular',
                // margin: 20,
                fontWeight: "700",
                color: "#F4F4F4",
                opacity:0.5,
                width: getRespValue(150),
              }}
            >
              Thought Therapy
            </Text>
            <TouchableOpacity onPress={()=>handleLogout()}>
            <Image
              style={{
                width: getRespValue(30),
                height: getRespValue(30),
                opacity:0.7,
                //   marginLeft: getRespValue(10),
              }}
              source={turnOff}
            />
            </TouchableOpacity>
          </View>
        )}
        {children}
      </ViewDef>
    </>
  );
};

export default Header;
