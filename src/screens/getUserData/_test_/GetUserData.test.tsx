import 'react-native';
import React from 'react';
import GetUserData from '../GetUserData';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

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
  <GetUserData
    navigation={
      {
        navigate: jest.fn(),
        goBack: jest.fn(),
      } as any
    }
    route={undefined as any}
  />
);

describe('GetUserData', () => {
  it('renders correctly', () => {
    const container = render(component);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('delete data button', () => {
    const {getByTestId} = render(component);
    const container = getByTestId('delete_data_button');
    fireEvent.press(container);
  });

  // it('FlatList render list', async () => {
  //   const {getByTestId} = render(component);
  //   await waitFor(() => getByTestId('List_Data_FlatList'));
  //   const container = getByTestId('List_Data_FlatList');
  //   expect(container).toBeDefined();
  // });
});
