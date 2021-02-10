import {fileUpload} from '../../helpers/fileUpload';

describe('pruebas en fileUpload', () => {
  test('debe cargar un archivo y retornar el URL', async () => {
    const imgUrl =
      'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png';
    const response = await fetch(imgUrl);

    const blob = await response.blob();

    const file = new File([blob], 'foto.png');

    const url = await fileUpload(file);

    expect(typeof url).toBe('string');
  });

  test('debe retornar un error', async () => {
    const file = new File([], 'foto.png');

    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
