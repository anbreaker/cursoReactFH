import React, {useEffect, useReducer} from 'react';
import {todoReducer} from './todoReducer';
import {useForm} from '../../hooks/useForm';
import './useReducer.css';
import {TodoList} from './TodoList';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{description}, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const hadleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: 'toggle',
      payload: todoId,
    };

    dispatch(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length <= 0) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div className="container">
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList, todos */}
          <TodoList todos={todos} hadleDelete={hadleDelete} handleToggle={handleToggle} />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="Tarea a rercordar..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary mt-2 btn-block">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
