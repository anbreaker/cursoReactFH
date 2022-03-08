import { ActionsTypes } from '../types/actions';
import { AuthActions } from '../types/actions';

const initialState = {
  name: '',
};

export const authReducer = (state: typeof initialState, action: AuthActions) => {
  switch (action.type) {
    case ActionsTypes.LOGIN:
      return {
        ...action.payload,
        logged: true,
      };

    case ActionsTypes.LOGOUT:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
