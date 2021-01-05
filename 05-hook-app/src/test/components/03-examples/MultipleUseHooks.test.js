import {shallow} from 'enzyme';
import {MultipleUseHooks} from '../../../components/03-examples/MultipleUseHooks';
import {useCounter} from '../../../hooks/useCounter';
import {useFetch} from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en MultipleUseHooks', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    });
  });

  test('debe mostarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleUseHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'anbreaker',
          quote: 'Hola Mundo',
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleUseHooks />);

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-4').text().trim()).toBe('anbreaker');
    expect(wrapper.find('footer').text().trim()).toBe('Hola Mundo');
  });
});
