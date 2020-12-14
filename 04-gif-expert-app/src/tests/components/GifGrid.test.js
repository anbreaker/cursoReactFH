import React from 'react';
import {shallow} from 'enzyme';
import {GifGrid} from '../../components/GifGrid';

describe('Pruebas en el <GifGrid /> ', () => {
  const category = 'Dragon ball';

  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
});
