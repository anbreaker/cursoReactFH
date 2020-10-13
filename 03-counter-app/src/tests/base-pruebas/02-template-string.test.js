import moduleName from '@testing-library/jest-dom';
import {getSaludo} from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo() debe retornar Hola anbreaker', () => {
    const nombre = 'anbreaker';
    const saludo = getSaludo(nombre);
    console.log(saludo);

    expect(saludo).toBe('Hola ' + nombre);
  });

  //getSaludo debe retornar Hola Jéssica si no hay argumento nombre

  test('getSaludo debe retornar Hola Jéssica si no hay argumento nombre', () => {
    const saludo2 = getSaludo();
    expect(saludo2).toBe('Hola Jéssica');
    console.log(saludo2);
  });
});
