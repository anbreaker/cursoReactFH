import {types} from '../../types/types';

describe('Pruebas con nuestros types', () => {
  test('deben de existir estos types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',

      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remove Error',

      uiStartLoading: '[UI] Start loading',
      uiFinishLoading: '[UI] Finish loading',

      notesAddNew: '[Notes] New Note',
      notesActive: '[Notes] Set active note',
      notesLoaded: '[Notes] Load notes',
      notesUpdated: '[Notes] Update note',
      noteFileUrl: '[Notes] Updated image url',
      noteDelete: '[Notes] Delete note',
      noteLogoutCleaning: '[Notes] Logout Cleaning',
    });
  });
});
