import {shallow} from 'enzyme';
import {TodoList} from '../../../components/08-useReducer/TodoList';
import {demoTodos} from '../../fixtures/demoTodos';

describe('pruebas en <TodoList /> ', () => {
  const hadleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList todos={demoTodos} hadleDelete={hadleDelete} handleToggle={handleToggle} />
  );

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener 2 <TodoListItem /> ', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

    expect(wrapper.find('TodoListItem').at(0).prop('hadleDelete')).toEqual(
      expect.any(Function)
    );

    expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(
      expect.any(Function)
    );
  });
});
