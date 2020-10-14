import '@testing-library/jest-dom';
import {retornaArreglo} from '../../base-pruebas/07-deses-arr';

describe('Pruebas en desestructuracion', () => {
  test('Debe retornar un String y un numero', () => {
    // const arr = retornaArreglo(); //['ABC', 123]
    // expect(arr).toEqual(['ABC', 123]);

    const [letras, numeros] = retornaArreglo(); //['ABC', 123]
    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe('number');
  });
});
