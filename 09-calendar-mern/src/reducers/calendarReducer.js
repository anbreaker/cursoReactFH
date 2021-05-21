import moment from 'moment';
import { types } from '../types/types';

const initialState = {
  events: [
    {
      title: 'Cumpleaños de Curro',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      bgColor: 'red',
      notes: 'El regalo',
      user: {
        uid: '123',
        name: 'anbreaker',
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    default:
      return state;
  }
};
