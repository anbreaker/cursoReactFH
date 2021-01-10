import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import {PrivateRoute} from '../../routers/PrivateRoute';

describe('Pruebas en <PrivateRoute /> ', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  };

  Storage.prototype.setItem = jest.fn();

  test('debe mostrar si esta autenticado y guardar el localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticate={true}
          component={() => <span>Componente enviado</span>}
          {...props}
        />
      </MemoryRouter>
    );

    console.log(wrapper.html());
    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  });

  test('debe bloquear el componente si no esta autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticate={false}
          component={() => <span>Componente enviado</span>}
          {...props}
        />
      </MemoryRouter>
    );

    console.log(wrapper.html());
    expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  });
});
