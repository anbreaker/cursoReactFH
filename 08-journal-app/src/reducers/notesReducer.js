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
    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map((noteItem) =>
          noteItem.id === action.payload.id ? action.payload.note : noteItem
        ),
      };

    case types.noteDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    default:
      return state;
  }
};
