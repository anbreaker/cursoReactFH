import '@testing-library/jest-dom';
import {getImagen} from '../../base-pruebas/11-async-await';

describe('Pruebas con async-await y Fetch', () => {
  test('Debe retornar una url de un gif', async () => {
    const url = await getImagen();
    console.log(url);
    expect(url.includes('https://')).toBe(true);
  });
});
