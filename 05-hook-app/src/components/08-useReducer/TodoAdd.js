import React from 'react';
import {useForm} from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
  const [{description}, handleInputChange, reset] = useForm({
    description: '',
  });

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

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
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
    </>
  );
};
