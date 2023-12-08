import {AddItemAction} from '.';
import {ADD_ITEM} from '../types/Actiontype';

const intialState = {
  UserData: [],
};

const UserReducer = (state = intialState, action: AddItemAction) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        UserData: [...state?.UserData, action?.payload],
      };
    default:
      return state;
  }
};

export default UserReducer;
