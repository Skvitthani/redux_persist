import 'react-native';
import React from 'react';
import AddUserDataScreen from '../AddUserDataScreen';
import {fireEvent, render} from '@testing-library/react-native';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockReturnValue({
    repositories: {
      loading: false,
      repos: [],
    },
  }),
  useDispatch: () => mockDispatch,
}));

const component = (
  <AddUserDataScreen
    navigation={
      {
        navigate: jest.fn(),
        goBack: jest.fn(),
      } as any
    }
    route={undefined as any}
  />
);

describe('AddUserDataScreen', () => {
  it('renders correctly', () => {
    const container = render(component);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('add user data', () => {
    const {getByTestId} = render(component);
    const container = getByTestId('add_user_data');
    fireEvent.press(container);
  });

  it('get user data', () => {
    const {getByTestId} = render(component);
    const container = getByTestId('get_user_data');
    fireEvent.press(container);
  });

  it('name text input', () => {
    const {getByTestId} = render(component);
    const container = getByTestId('name_text_input');
    fireEvent.changeText(container);
  });

  it('age text input', () => {
    const {getByTestId} = render(component);
    const container = getByTestId('age_text_input');
    fireEvent.changeText(container);
  });

  it('city text input', () => {
    const {getByTestId} = render(component);
    const container = getByTestId('city_text_input');
    fireEvent.changeText(container);
  });
});
