import {render} from '@testing-library/react-native';
import React from 'react';
import StackNavigate from '../StackNavigate';

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: 'mocked-Navigator',
    Screen: 'mocked-Screen',
  }),
}));

jest.mock('react-redux', () => ({
  Provider: jest.fn(),
}));

const component = <StackNavigate />;

describe('StackNavigate', () => {
  it('renders correctly', () => {
    const container = render(component);

    expect(container.toJSON()).toMatchSnapshot();
  });
});
