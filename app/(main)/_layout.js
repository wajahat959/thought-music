/* eslint-disable @typescript-eslint/no-unused-vars */
// Router.js
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
// import { default as HomeActiveSvg, default as HomeSvg, default as OptionActiveSvg, default as OptionSvg, default as PayeeActiveSvg, default as PayeeSvg, default as SendActiveSvg, default as SendSvg } from '../../assets/icons/tabBar/Home.svg';
// import Option from './Audios';
// import Paye from './ChatBot';
// import HomeM from './Home';
// import Send from './Send';
import { useSelector } from 'react-redux';
import { getRespValue } from '../../design/desin';
import { useCurrentUserQuery } from '../../store/api/userData';
import { selectUser } from '../../store/selectors/userSelect';
import Audios from './Audios';
import ChatBot from './ChatBot';
import Home from './Home';
import Profile from './Profile';
import Sleep from './Sleep';
// 
const Tab = createBottomTabNavigator();

const Layout = () => {
//   const { currentData, accessToken, email } = useSelector(selectUser);
  const router = useRouter();
  
  const {accessToken}= useSelector(selectUser);
  const { isLoading: currentLoading,refetch, isFetching: currentFetching } =
useCurrentUserQuery(null, {
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
          safeAreaInsets={{ bottom: Platform.OS === 'ios' ? getRespValue(20) : 0 }}
          screenOptions={({ route }) => ({
            
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Audios') {
                iconName = focused ? 'music' : 'music-note-outline';
              } else if (route.name === 'ChatBot') {
                iconName = focused ? 'robot' : 'robot-outline';
              } else if (route.name === 'Sleep') {
                iconName = focused ? 'weather-night' : 'weather-night';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'account-cog' : 'account-cog-outline';
              }
    
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor:'#8856C6',
            tabBarInactiveTintColor:'grey'
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
             headerShown:false,
             tabBarLabel: 'Home',
            }}
          />
           <Tab.Screen
            name="Audios"
            component={Audios}
            options={{
              headerShown:false,
              tabBarLabel: 'Audio',
            
            }}
          />
          <Tab.Screen
            name="ChatBot"
            component={ChatBot}
            options={{
              tabBarLabel: 'ChatBot',
              headerShown:false
            }}
          />
          <Tab.Screen
            name="Sleep"
            component={Sleep}
            options={{
              tabBarLabel: 'Sleep',
              headerShown:false
            //   tabBarIcon: ({ focused }) =>
            //     focused ? <PayeeActiveSvg /> : <PayeeSvg />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Setting',
              headerShown:false
            
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

// };

export default Layout;
// safeAreaInsets={{ bottom: 10 }}
