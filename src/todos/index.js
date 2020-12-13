import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './add-todo';
import TodoList from './todo-list';

const data = [
  {
    id: uuidv4(),
    title: "Learn HTML and CSS"
  },
  {
    id: uuidv4(),
    title: "Learn JavaScript"
  },
  {
    id: uuidv4(),
    title: "Learn React"
  },
  {
    id: uuidv4(),
    title: "Become a Web Developer"
  }
];


const TodoApp = () => {
  const [todos, setTodos] = useState(data);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: uuidv4(),
        title: todo
      }
    ]);
  };

  const handleDeleteTodo = (todo) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
    );
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <h4 className="mb-3">My Todo</h4>
        </div>
      </div>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default TodoApp;
