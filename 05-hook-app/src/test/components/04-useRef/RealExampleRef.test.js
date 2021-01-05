import {shallow} from 'enzyme';
import {RealExampleRef} from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef /> ', () => {
  const wrapper = shallow(<RealExampleRef />);
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleUseHooks').exists()).toBe(false);
  });

  test('debe mostrar el componente <MultipleUseHooks /> ', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleUseHooks').exists()).toBe(true);
  });
});
