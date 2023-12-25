import AsyncStorage from '@react-native-async-storage/async-storage';
import {DELETE_DATA} from '../../types/Actiontype';
import RootReducer from '..';

jest.mock('@react-native-async-storage/async-storage', () => ({
  removeItem: jest.fn(),
}));

describe('RootReducer', () => {
  it('handles DELETE_DATA action correctly', () => {
    const initialState = {
      user: {},
    };

    const action = {
      type: DELETE_DATA,
    };

    const state = RootReducer(initialState, action);

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('root');
  });
});
