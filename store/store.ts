/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './rootReducer';
import { persistReducer } from 'redux-persist';
// import reducers from '../store/rootReducer';

import { mainApi } from './api/mainApi';
import { signinApi } from './api/signinApi';
import { signupApi } from './api/signupApi';
import { userData } from './api/userData';
import { rootReducer } from './rootReducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: __DEV__,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      mainApi.middleware,
      signinApi.middleware,
      signupApi.middleware,
      userData.middleware,
        
     
    ]),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
