import {types} from '../types/types';
/*
  {
    notes: [],
    active: null,
    active: {
      id. 'LAKJFDOI165185ADF',
      title: '',
      body: '',
      imageUrl: '',
      date: 123546842,
    }
  }
*/
const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.notesLoaded:
      return {
        ...state,
        notes: [...action.payload],
      };

    default:
      return state;
  }
};
