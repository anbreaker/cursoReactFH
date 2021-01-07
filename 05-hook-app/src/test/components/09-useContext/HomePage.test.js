const {mount} = require('enzyme');
const {HomePage} = require('../../../components/09-useContext/HomePage');
const {UserContext} = require('../../../components/09-useContext/UserContext');

describe('Pruebas en <HomePage /> ', () => {
  const user = {
    name: 'anbreaker',
    email: 'anbreaker@gmail.com',
  };

  const wrapper = mount(
    <UserContext.Provider value={{user}}>
      <HomePage />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
