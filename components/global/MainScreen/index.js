/* eslint-disable react/jsx-props-no-spreading */
import { getRespValue } from "@/design/desin";
import { useMemo } from "react";
import {
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
  View as ViewDef,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const ScreenMain = (props) => {
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
    () => (Platform.OS === "android" ? top * 1.1 : top),
    [top]
  );

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
        {!disableTopSafeArea && (
          <View style={{ height: paddingTop, backgroundColor: topColor }} />
        )}
        {!disableAppBar && (
          <View
            style={{
              paddingHorizontal: getRespValue(20),
              paddingTop: getRespValue(50),
              borderBottomLeftRadius: getRespValue(18),
              borderBottomRightRadius: getRespValue(18),
              backgroundColor: "#1371D3",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                justifyContent: "center",
                textAlign: "center",
                marginBottom: getRespValue(130),
                // margin: 20,
                fontWeight: "700",
                color: "white",
              }}
            >
              {title}
            </Text>
          </View>
        )}
        {children}
      </ViewDef>
    </>
  );
};

ScreenMain.defaultProps = {
  scroll: false,
  topColor: "#000",
  bottomColor: "#000",
  whiteScan: false,
  appBarProps: {},
  disableBottomSafeArea: false,
  disableTopSafeArea: false,
  disableAppBar: false,
  newScreenAuth: false,
  darkStatus: false,
  title: "",
  label: "",
  onPress: () => null,
};

export default ScreenMain;
