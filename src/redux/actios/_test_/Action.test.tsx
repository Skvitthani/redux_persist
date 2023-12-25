import {act} from 'react-test-renderer';
import {UaserDataAction} from '../Action';

describe('UaserDataAction', () => {
  it('dispatches ADD_ITEM action with correct payload', async () => {
    const dispatchMock = jest.fn();

    const requestMock = {
      age: '25',
      name: 'John',
      city: 'ExampleCity',
    };

    await act(async () => {
      await UaserDataAction(requestMock)(dispatchMock);
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'ADD_ITEM',
      payload: requestMock,
    });
  });
});
