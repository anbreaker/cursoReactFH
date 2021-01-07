import {mount} from 'enzyme';
import {AppRouter} from '../../../components/09-useContext/AppRouter';
const {UserContext} = require('../../../components/09-useContext/UserContext');

describe('Pruebas en <AppRouter /> ', () => {
  const user = {
    id: 1,
    name: 'anbreaker',
  };
  const wrapper = mount(
    <UserContext.Provider value={{user}}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
