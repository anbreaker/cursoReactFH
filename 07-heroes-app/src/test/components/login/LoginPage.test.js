import {mount} from 'enzyme';
import {AuthContext} from '../../../auth/AuthContext';
import {LoginPage} from '../../../components/login/LoginPage';
import {types} from '../../../types/types';

describe('Pruebas en el componente <LoginPage />  ', () => {
  const history = {
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginPage history={history} />
    </AuthContext.Provider>
  );

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de realizar el dispatch y la navegacion', () => {
    const handleClick = wrapper.find('button').prop('onClick');
    handleClick();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'anbreaker',
      },
    });

    expect(history.replace).toHaveBeenCalledWith('/');

    localStorage.setItem('lastPath', '/dc');
    handleClick();
    expect(history.replace).toHaveBeenCalledWith('/dc');
  });
});
