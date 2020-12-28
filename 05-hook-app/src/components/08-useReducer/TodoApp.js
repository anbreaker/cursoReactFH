import React, {useEffect, useReducer} from 'react';
import {todoReducer} from './todoReducer';
import './useReducer.css';
import {TodoList} from './TodoList';
import {TodoAdd} from './TodoAdd';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

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

  const handleAddTodo = (newTodo) => {
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
          {/* TodoList, todos */}
          <TodoList todos={todos} hadleDelete={hadleDelete} handleToggle={handleToggle} />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
