import {shallow} from 'enzyme';
import {Navbar} from '../../../components/09-useContext/Navbar';

describe('Pruebas en <Navbar /> ', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
