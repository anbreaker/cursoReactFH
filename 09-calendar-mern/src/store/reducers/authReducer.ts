import { types } from '../../types/types';

type User = {
  checking: boolean;
  uid?: string;
  name?: string;
};

const initialState: User = {
  checking: true,
  // uid:null,
  // name:null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };

    case types.authStartRegister:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };

    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };

    case types.authLogout:
      return {
        checking: false,
      };

    default:
      return state;
  }
};
