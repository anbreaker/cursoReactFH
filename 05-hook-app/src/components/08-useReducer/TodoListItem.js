import React from 'react';

export const TodoListItem = ({todo, index, hadleDelete, handleToggle}) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>
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
  );
};
