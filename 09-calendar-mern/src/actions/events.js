import { types } from '../types/types';

export const eventAddNey = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventClearActiveEvent = () => ({
  type: types.eventClearActiveEvent,
});

export const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event,
});
