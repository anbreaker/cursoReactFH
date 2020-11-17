import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {AddCategory} from '../../components/AddCategory';

describe('Pruebas en el componente', () => {
  const setCategories = jest.fn();

  // La doble inicializacion es para conservar la ayuda del vscode
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', {target: {value}});

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe de postear la informacion con submit ', () => {
    expect(setCategories).not.toHaveBeenCalled();
  });
});
