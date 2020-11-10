import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {AddCategory} from '../../components/AddCategory';

describe('Pruebas en el componente', () => {
  const setCategories = () => {};
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
