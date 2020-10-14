import React from 'react';
import '@testing-library/jest-dom';
// import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import {shallow} from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
  // Pruebas Jest Nativo
  // test('Debe mostrar el mensaje', () => {
  //   const saludo = 'Hola, soy Goku';
  //   const {getByText} = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });
  //
  // Pruebas con Enzyme

  test('Debe mostrar <PrimeraApp /> correctamente ', () => {
    const saludo = 'Hola, soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar el subtinuo por props ', () => {
    const saludo = 'Hola, soy Goku';
    const subtitulo = 'Soy un subtitulo';
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

    const textoParrafo = wrapper.find('p').text();
    console.log(textoParrafo);

    expect(textoParrafo).toBe(subtitulo);
  });
});
