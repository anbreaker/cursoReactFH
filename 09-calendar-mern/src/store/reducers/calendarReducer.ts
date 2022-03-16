import { types } from '../../types/types';

/*
  {
    id: '1233-1234-7899'
    title: 'Cumple',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    notes: 'Comprar tarta',
    user: {
      _id: '123',
      name: 'anbreaker',
    },
  }
*/

const initialState: any = {
  events: [],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.eventAddNew:
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
        events: state.events.map((event: any) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((event: any) => event.id !== state.activeEvent.id),
        activeEvent: null,
      };

    case types.eventLoaded:
      return {
        ...state,
        events: [...action.payload],
      };

    default:
      return state;
  }
};
