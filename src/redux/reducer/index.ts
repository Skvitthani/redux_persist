import {ADD_ITEM} from '../types/Actiontype';

export interface AddItemAction {
  payload: any;
  type: typeof ADD_ITEM;
}

export interface UserState {
  UserData: any[];
}
