import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

/*
// Tarea 1:
    1. Enzyme 
    * https://enzymejs.github.io/enzyme/
    2. Enzyme to Json
    * https://www.npmjs.com/package/enzyme-to-json
    3. Debe mostrar el componente correctamente
        * Shallow
        * wrapper
        * wrapper .toMatchSnapshot()
   Tarea 2:
    1. Añadir PropTypes, url, title = Obligatorios
    2. Enviar title y url a la hora de usar shallow()
    3. Actualizar el snapshot con los cambios.
*/

describe('Pruebas en <GifGridItem />', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Debe mostrar el componente correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('debe tener la imagen igual al url y alt de los props ', () => {
    const img = wrapper.find('img');
    // console.log(img.props().src);
    expect(img.props().src).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe tener animate__fadeIn ', () => {
    const div = wrapper.find('div');
    expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
  });
});
