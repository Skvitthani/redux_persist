import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {thunk} from 'redux-thunk';
import RootReducer from '../index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
export const Store = createStore(
  persistedReducer,
  {} as any,
  applyMiddleware(thunk),
);
export const persistor = persistStore(Store);
