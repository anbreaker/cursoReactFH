import React from 'react';
import {shallow} from 'enzyme';
import {GifGrid} from '../../components/GifGrid';
import '@testing-library/jest-dom';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid /> ', () => {
  const category = 'Dragon ball';

  test('debe mostrarse correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.gif',
        title: 'Cualquier cosa',
      },
      {
        id: '123',
        url: 'https://localhost/cualquier/cosa.gif',
        title: 'Cualquier cosa',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
