import { types } from '../types/types';

export const eventAddedNew = (event) => ({
  type: types.eventAddedNew,
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

export const eventDeleted = () => ({
  type: types.eventDeleted,
});
