import {mount} from 'enzyme';
import {MemoryRouter, Route} from 'react-router-dom';
import {HeroesPage} from '../../../components/heroes/HeroesPage';

describe('Pruebas en <HeroesPage /> Simular segmentos del URL en nuestras pruebas', () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test('debe mostrar el componente redirect si no hay argumentos en el URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroesPage history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('debe mostrar un hero si el parametro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={HeroesPage} />
      </MemoryRouter>
    );

    expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('debe regresar a la pantalla anterior con PUSH', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={(props) => <HeroesPage history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test('debe regresar a la pantalla anterior con goBack', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={(props) => <HeroesPage history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect(historyMock.goBack).toHaveBeenCalled();
    expect(historyMock.push).not.toHaveBeenCalled();
    expect(historyMock.push).toHaveBeenCalledTimes(0);
  });

  test('debe llamar al Redirect si el hero no existe (url no correcta)', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider-5454']}>
        <Route
          path="/hero/:heroId"
          component={(props) => <HeroesPage history={historyMock} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');
  });
});
