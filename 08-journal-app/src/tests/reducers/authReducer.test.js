import {authReducer} from '../../reducers/authReducer';
import {types} from '../../types/types';

describe('Pruebas en el authReducer', () => {
  test('debe realizar el login', () => {
    const initState = {};

    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'anbreaker',
      },
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({
      uid: 'abc',
      name: 'anbreaker',
    });
  });

  test('debe realizar el logout', () => {
    const initState = {
      uid: 'abc',
      name: 'anbreaker',
    };

    const action = {
      type: types.logout,
    };

    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });

  test('no debe realizar cambios en el state', () => {
    const initState = {
      uid: 'abc',
      name: 'anbreaker',
    };

    const action = {
      type: 'noExiste',
      payload: {},
    };

    const state = authReducer(initState, action);
    expect(state).toEqual(initState);
  });
});
