import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import {AuthContext} from '../../auth/AuthContext';
import {DashboardRoutes} from '../../routers/DashboardRoutes';

describe('Pruebas en <DashboardRoutes />', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'anbreaker',
    },
  };

  test('debe mostarse correctamente', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <DashboardRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
  });
});
