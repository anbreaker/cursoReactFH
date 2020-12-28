import React from 'react';
import {TodoListItem} from './TodoListItem';

export const TodoList = ({todos, hadleDelete, handleToggle}) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          hadleDelete={hadleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};
