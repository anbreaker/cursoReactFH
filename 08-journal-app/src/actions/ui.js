import {types} from '../types/types';

export const setErrorAction = (error) => ({
  type: types.uiSetError,
  payload: error,
});

export const removeErrorAction = () => ({
  type: types.uiRemoveError,
});

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});
