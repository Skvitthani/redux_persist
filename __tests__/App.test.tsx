import 'react-native';
import App from '../App';
import React from 'react';
import {it} from '@jest/globals';
import {render} from '@testing-library/react-native';

jest.mock('@react-native-async-storage/async-storage', () => jest.fn());
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: 'mocked-Navigator',
    Screen: 'mocked-Screen',
  }),
}));

jest.mock('react-redux', () => ({
  Provider: jest.fn(),
}));

jest.mock('redux-persist', () => ({
  persistReducer: jest.fn(),
  persistStore: jest.fn(),
}));

jest.mock('react-native-google-mobile-ads', () => ({
  TestIds: jest.fn().mockReturnValue({
    createForAdRequest: jest.fn(),
  }),
}));
jest.mock('redux', () => ({
  combineReducers: jest.fn(),
  applyMiddleware: jest.fn(),
  createStore: jest.fn(),
}));

const component = <App />;

describe('App', () => {
  it('renders correctly', () => {
    const container = render(component);
    expect(container.toJSON()).toMatchSnapshot();
  });
});
