import {act} from '@testing-library/react';
import {shallow} from 'enzyme';
import {TodoApp} from '../../../components/08-useReducer/TodoApp';
import {demoTodos} from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp /> ', () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn();

  test('debe de mostrase correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe agregar un TODO', () => {
    const wrapper = shallow(<TodoApp />);

    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
    // expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('debe eliminar 1 TODO', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (1)');

    wrapper.find('TodoList').prop('hadleDelete')(demoTodos[0].id);
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
  });
});
