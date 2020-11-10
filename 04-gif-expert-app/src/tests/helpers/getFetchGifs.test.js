import {getFetchGifs} from '../../helpers/getFetchGifs.js';

describe('Pruebas con getFetchGifs', () => {
  test('Debe traer 10 elementos', async () => {
    const gifs = await getFetchGifs('One Punch');

    expect(gifs.length).toBe(10);
  });

  test('Debe traer 0 elementos si llamamos vacio', async () => {
    const gifs = await getFetchGifs('');

    expect(gifs.length).toBe(0);
  });
});
