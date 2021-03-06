import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.REACT_APP_API_KEY,
  api_secret: process.env.REACT_APP_API_SECRET,
});

describe('pruebas en fileUpload', () => {
  test('debe cargar un archivo y retornar el URL', async (done) => {
    const imgUrl =
      'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png';
    const response = await fetch(imgUrl);

    const blob = await response.blob();

    const file = new File([blob], 'foto.png');

    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    //Borrar imagen por id
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');

    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });
  });

  test('debe retornar un error', async () => {
    const file = new File([], 'foto.png');

    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
