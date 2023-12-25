import {combineReducers} from 'redux';
import UserReducer from '../reducer/Reducer';
import {DELETE_DATA} from '../types/Actiontype';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appReducer: any = combineReducers({
  user: UserReducer,
});

const RootReducer = (state: any, action: any) => {
  if (action.type === DELETE_DATA) {
    state = undefined;
    AsyncStorage.removeItem('root');
  }
  return appReducer(state, action);
};

export default RootReducer;
