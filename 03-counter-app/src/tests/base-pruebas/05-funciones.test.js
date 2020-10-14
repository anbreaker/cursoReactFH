import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones.js';

describe('Pruebas en 05-funciones.js', () => {
  test('getUser() debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'anbreaker',
    };

    const user = getUser();
    console.log(user);

    expect(user).toStrictEqual(userTest);
  });

  // getusuarioActivo debe de retornar un objeto

  test('getusuarioActivo() debe de retornar un objeto', () => {
    const nombre = 'Jéssica';
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: 'ABC123',
      username: nombre,
    });
  });
});
