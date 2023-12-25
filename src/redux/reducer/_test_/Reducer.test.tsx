import UserReducer from '../Reducer';
import {AddItemAction, UserState} from '..';
import {ADD_ITEM} from '../../types/Actiontype';

describe('UserReducer', () => {
  it('handles ADD_ITEM action correctly', () => {
    const initialState: UserState = {
      UserData: [],
    };

    const action: AddItemAction = {
      type: ADD_ITEM,
      payload: {},
    };

    const newState = UserReducer(initialState as any, action);

    expect(newState).toEqual({
      UserData: [...initialState.UserData, action.payload],
    });
  });
});
