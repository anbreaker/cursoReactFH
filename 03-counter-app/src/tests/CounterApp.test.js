import React from 'react';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import {shallow} from 'enzyme';

// Tareas
// 1. Crear las siguientes pruebas:
// * Debe mostar <CounterAp /> correctamente (hacer test con snapshot)
//     Y sus valores por defecto
// * Debe mostrar el valor por defecto de 100
//     usar el wrapper.find, tomando el elemento html donse se muestra el valor del contador.
describe('Pruebas en < CounterApp />', () => {
  test('Debe mostar <CounterApp /> correctamente', () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('100');
  });
});
