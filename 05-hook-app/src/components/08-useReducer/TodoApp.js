import React, {useEffect, useReducer} from 'react';
import {todoReducer} from './todoReducer';
import {useForm} from '../../hooks/useForm';
import './useReducer.css';

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
          <ul className="list-group list-group-flush">
            {todos.map((todo, index) => (
              <li key={todo.id} className="list-group-item">
                <p
                  className={`${todo.done && 'complete'}`}
                  onClick={() => handleToggle(todo.id)}>
                  {index + 1}.- {todo.description}
                </p>

                <button
                  className="btn btn-danger"
                  onClick={() => {
                    hadleDelete(todo.id);
                  }}>
                  Borrar
                </button>
              </li>
            ))}
          </ul>
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
