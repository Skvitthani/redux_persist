import {userAction} from '.';
import {ADD_ITEM} from '../types/Actiontype';

export const UaserDataAction =
  (request: userAction) =>
  async (dispatch: (arg0: {type: string; payload: userAction}) => void) => {
    dispatch({
      type: ADD_ITEM,
      payload: request,
    });
  };
