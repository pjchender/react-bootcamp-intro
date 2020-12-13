import React, { useState } from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
  color: #000000;
  background-color: #61dafb;
  border-radius: 0;

  &:hover {
    background: white;
  }
`

const AddTodo = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    const text = todo.trim();

    if (!text) {
      return;
    }

    setTodo("");

    handleAddTodo(text);
  };

  return (
    <div className="row justify-content-center mb-3">
      <div className="col-8 mb-3">
        <div className="d-flex">
          <input
            onChange={handleChange}
            type="text"
            placeholder="add item"
            id="new-todo"
            className="form-control mr-2 rounded-0"
            value={todo}
          />
          <AddButton className="btn" onClick={handleClick}>
            Add
          </AddButton>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
