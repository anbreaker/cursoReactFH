import {shallow} from 'enzyme';
import {TodoListItem} from '../../../components/08-useReducer/TodoListItem';
import {demoTodos} from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem /> ', () => {
  const hadleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      hadleDelete={hadleDelete}
      handleToggle={handleToggle}
    />
  );

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe llamarse a la funcion handleToggle', () => {
    // jes.fn()
    wrapper.find('button').simulate('click');
    expect(hadleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('debe llamarse a la funcion hadleDelete', () => {
    // jes.fn()
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('debe mostrar el texto correctamente', () => {
    // Contenido del parrafo.
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(`1.- ${demoTodos[0].description}`);
  });

  test('debe de tener la clase "complete" si el TODO.done = true', () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} />);

    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
