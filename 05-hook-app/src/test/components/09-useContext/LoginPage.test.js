const {mount} = require('enzyme');
const {LoginPage} = require('../../../components/09-useContext/LoginPage');
const {UserContext} = require('../../../components/09-useContext/UserContext');

describe('Pruebas en <LoginPage /> ', () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{setUser}}>
      <LoginPage />
    </UserContext.Provider>
  );

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de ejecutar con el argumento esperado', () => {
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'anbreaker',
    });
  });
});
