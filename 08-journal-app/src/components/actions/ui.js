import {types} from '../../types/types';

export const setErrorAction = (error) => ({
  type: types.uiSetError,
  payload: error,
});

export const removeErrorAction = (error) => ({
  type: types.uiRemoveError,
});
