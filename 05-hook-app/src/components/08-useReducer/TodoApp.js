import React, {useReducer} from 'react';
import {todoReducer} from './todoReducer';
import './useReducer.css';

export const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      description: 'Aprender React',
      done: false,
    },
  ];

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  console.log(todos);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description: 'Nueva tarea',
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action);
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
                <p className="text-center">
                  {index + 1}.- {todo.description}
                </p>

                <button className="btn btn-danger">Borrar</button>
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
