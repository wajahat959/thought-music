import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import TrackPlayer from 'react-native-track-player';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// import { playBackService } from '../musicPlayerService';
import store from '../store/store';
// TrackPlayer.registerPlaybackService(()=>require('./../service.js'));
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Warning: ...']); // Hide warnings

// LogBox.ignoreAllLogs(); // Hide all warning notifications on front-end
const persistor = persistStore(store);
// TrackPlayer.registerPlaybackService(()=>playBackService)
// const Layout = () => {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   }
//   return (
//     <SafeAreaProvider>
//       <NativeBaseProvider>
//         <Stack
//           screenOptions={{
//             headerShown: false,
//             gestureEnabled: false,
//           }}
//           initialRouteName="welcome"
//         />
//         <StatusBar />
//       </NativeBaseProvider>
//     </SafeAreaProvider>
//   );
// };

const ReduxWrapper = () => {
  // const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <SafeAreaProvider>
      
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider
            theme={{
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                secondaryContainer: 'transparent',
              },
            }}
          >
            <NativeBaseProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />
          
              <StatusBar />
            </NativeBaseProvider>
          
          </PaperProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default ReduxWrapper;
