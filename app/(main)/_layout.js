/* eslint-disable @typescript-eslint/no-unused-vars */
// Router.js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
// import { default as HomeActiveSvg, default as HomeSvg, default as OptionActiveSvg, default as OptionSvg, default as PayeeActiveSvg, default as PayeeSvg, default as SendActiveSvg, default as SendSvg } from '../../assets/icons/tabBar/Home.svg';
// import Option from './Audios';
// import Paye from './ChatBot';
// import HomeM from './Home';
// import Send from './Send';
import { useSelector } from "react-redux";
import chatIcon from "../../assets/main/chatbot.png";
import homeIcon from "../../assets/main/homeicon.png";
import IconBack from "../../assets/main/iconback.png";
import musicIcon from "../../assets/main/musicicon.png";
import profileIcon from "../../assets/main/profileicon.png";
import sleepIcon from "../../assets/main/sleepicon.png";
import { getRespValue } from "../../design/desin";
import { useCurrentUserQuery } from "../../store/api/userData";
import { selectUser } from "../../store/selectors/userSelect";
import Audios from "./Audios";
import ChatBot from "./ChatBot";
import Home from "./Home";
import Profile from "./Profile";
import Sleep from "./Sleep";
//
const Tab = createBottomTabNavigator();

const Layout = () => {
  //   const { currentData, accessToken, email } = useSelector(selectUser);
  const router = useRouter();

  const { accessToken } = useSelector(selectUser);
  const {
    isLoading: currentLoading,
    refetch,
    isFetching: currentFetching,
  } = useCurrentUserQuery(null, {
    skip: !accessToken,
  });

  // useEffect(() => {
  //   if (!currentData?.results?.isVerified) {
  //     router.replace('/(auth)/Welcome');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentData?.results?.isVerified]);

  //   if (!currentData?.results?.isVerified) {
  //     // router.replace('/(auth)/Welcome');
  //     return <Redirect href="/(auth)/Welcome" />;
  //   }
  //   if (currentData?.results?.isVerified) {
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        initialRouteName="Home"
        safeAreaInsets={{
          bottom: Platform.OS === "ios" ? getRespValue(20) : 10,
        }}
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            height: Platform.OS === "ios" ? getRespValue(105) : getRespValue(95),
      width: "90%", // Set width to 90% of the screen width
      left:'5%',
      alignSelf: 'center',
      borderRadius: getRespValue(30),
      borderWidth: 0.4,
      borderTopColor: "white",
      borderBottomColor: "white",
      borderLeftColor: "white",
      borderRightColor: "white",
      
      backgroundColor: "#171938",
      opacity: 0.7,
      position: "absolute",
      marginBottom: 40,
          },
       
          tabBarActiveTintColor: "#8856C6",
          tabBarInactiveTintColor: "grey",
        })}
        // tabBarOptions={{
        //   activeTintColor: '#8856C6',
        //   inactiveTintColor: 'gray',
        //  // tabBarStyle: { backgroundColor: '#391F87' }, // Change the background color here

        // }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            // tabBarLabel: "Home",
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  justifycontent: "center",
                  marginBottom: Platform.OS === "ios" ? 3 : 0,
                  opacity: focused?1:0.8,
                 
                  
                }}
              >
                <Image style={{top:15}} source={IconBack}  />
                <Image
                  style={{ marginTop: getRespValue(7),
                     left: 16,
                  bottom:24,
                  opacity: focused?1:0.8,
                //  marginBottom: focused?8:0
                    }}
                  source={homeIcon}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Audios"
          component={Audios}
          options={{
            headerShown: false,
            // tabBarLabel: "Audio",
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  justifycontent: "center",
                  opacity: focused?1:0.8,
                  marginLeft:
                    Platform.OS === "ios"
                      ? getRespValue(-100)
                      : getRespValue(-110),
                  // marginTop: -83,
                }}
              >
                <Image style={{top:getRespValue(13),
                  left:getRespValue(50),
                  width:51,
                  height:51,
          
                  }} source={IconBack} />
                <Image
                  style={{
                    // margin: 30,
                    // marginTop: 36,
                    // position: "absolute",
                    // marginLeft: 32,
                 bottom:23,
                 left:Platform.OS==='ios'?getRespValue(70):getRespValue(70),
                 
               
                  }}
                  source={musicIcon}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ChatBot"
          component={ChatBot}
          options={{
            // tabBarLabel: "ChatBot",
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{ justifycontent: "center" }}>
                <Image style={{  opacity: focused?1:0.8, marginTop: getRespValue(13),width:getRespValue(80)
                  ,height:getRespValue(80)}} source={chatIcon} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Sleep"
          component={Sleep}
          options={({navigation})=>({
            // tabBarLabel: "Sleep",
            headerShown: false,
            //   tabBarIcon: ({ focused }) =>
            //     focused ? <PayeeActiveSvg /> : <PayeeSvg />,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  justifycontent: "center",
                  opacity: focused?1:0.8,
                  marginBottom: Platform.OS === "ios" ? 3 : 0,
                }}
              >
                <Image style={styles.outerIcon} source={IconBack} />
                <Image style={styles.innerIcon} source={sleepIcon} />
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={({navigation}) => ({

            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{ justifycontent: "center", opacity: focused?1:0.8, }}>
                <Image style={styles.outerIcon} source={IconBack} />
                <Image style={styles.innerIcon} source={profileIcon} />
              </View>
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// };

export default Layout;
// safeAreaInsets={{ bottom: 10 }}

const styles = StyleSheet.create({
  innerIcon: {
    position: "absolute",
    margin: getRespValue(20),
    marginTop: 20,
  },
  outerIcon: {
    marginTop: getRespValue(7),
  },
});
