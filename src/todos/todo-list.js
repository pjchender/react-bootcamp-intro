import React from 'react';
import styled from 'styled-components'

const StyledTrashIcon = styled.i`
  color: #A0A0A0;
  cursor: pointer;

  &:hover {
    color: #808080;
  }
`

const StyledListGroup = styled.ul`
  color: #333333;
`

const TodoList = ({ todos, handleDeleteTodo }) => {
  const handleClick = (todo) => () => {
    handleDeleteTodo(todo);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <h5>Todos</h5>
        <StyledListGroup className="list-group rounded-0">
          {todos.map((todo) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center rounded-0"
              key={todo.id}
            >
              <span>{todo.title}</span>
              <StyledTrashIcon className="delete fa fa-trash" onClick={handleClick(todo)}></StyledTrashIcon>
            </li>
          ))}
        </StyledListGroup>
      </div>
    </div >
  );
};

export default TodoList;
