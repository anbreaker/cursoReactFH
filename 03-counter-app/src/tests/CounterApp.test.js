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
describe('Pruebas en <CounterApp />', () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('Debe mostar <CounterApp /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('100');
  });

  test('Debe de incrementar con el boton +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('11');
  });

  test('Debe de decrementar con el boton -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('9');
  });

  test('Debe de colocar el valor por defecto con el boton reset', () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    console.log(counterText);

    expect(counterText).toBe('105');
  });
});
