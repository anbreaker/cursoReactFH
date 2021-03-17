import { types } from '../types/types';

const initialState = {
  modalOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    default:
      return state;
  }
};
