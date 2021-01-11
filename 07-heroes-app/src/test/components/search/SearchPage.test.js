const {mount} = require('enzyme');
const {MemoryRouter, Route} = require('react-router-dom');
const {SearchPage} = require('../../../components/search/SearchPage');

describe('Pruebas en el componente <SearchPage />', () => {
  test('debe mostrarse correctamente con los valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchPage} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero');
  });

  test('debe mostrar a Batman y el input con el valor del queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchPage} />
      </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar un error si no se encuentra el hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman-123']}>
        <Route path="/search" component={SearchPage} />
      </MemoryRouter>
    );
    expect(wrapper.find('.alert-danger').exists()).toBe(true);
    expect(wrapper.find('.alert-danger').text().trim()).toBe(
      'There is not a Hero with "batman-123"'
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('debe llamar al push del history', () => {
    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman-123']}>
        <Route path="/search" component={(props) => <SearchPage history={history} />} />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman',
      },
    });

    wrapper.find('form').prop('onSubmit')({preventDefault() {}});
    expect(history.push).toHaveBeenCalledWith(`?q=batman`);
  });
});
