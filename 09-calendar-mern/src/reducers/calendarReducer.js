import moment from 'moment';
import { types } from '../types/types';

const initialState = {
  events: [
    {
      id: new Date().getTime(),
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

    case types.eventAddedNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
        activeEvent: null,
      };

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
        activeEvent: null,
      };

    default:
      return state;
  }
};
