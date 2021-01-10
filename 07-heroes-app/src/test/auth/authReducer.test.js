import {authReducer} from '../../auth/authReducer';
import {types} from '../../types/types';

describe('pruebas en authReducer', () => {
  // const state = {
  //   name: 'anbreaker',
  //   logged: true,
  // };
  test('debe retornar el estado por defecto', () => {
    const state = authReducer({logged: false}, {});
    expect(state).toEqual({logged: false});
  });

  test('debe autenticar y colocar el name del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'anbreaker',
      },
    };

    const state = authReducer({logged: false}, action);
    expect(state).toEqual({
      logged: true,
      name: 'anbreaker',
    });
  });

  test('debe borrar el name del usuario y pasar el logged a false', () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({logged: true, name: 'anbreaker'}, action);
    expect(state).toEqual({
      logged: false,
    });
  });
});
