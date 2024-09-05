<<<<<<< HEAD
import React, { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Clean the house" },
  { id: 3, text: "Go for a run" },
  { id: 4, text: "Finish homework" },
  { id: 5, text: "Call mom" },
  { id: 6, text: "Buy groceries" },
  { id: 7, text: "Walk the dog" },
  { id: 8, text: "Read a book" },
  { id: 9, text: "Do laundry" },
  { id: 10, text: "Write code" },
];
const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    //새로고침 방지
    e.preventDefault();
    //유효성검사
    if (!newTodo.trim()) {
      return;
    }
    setTodos([...todos, { id: crypto.randomUUID(), text: newTodo }]);
    setNewTodo("");
  };

  const handleInputChange = (e) => setNewTodo(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Todo를 추가해주세요!"
        />
        <button type="submit">추가하기</button>
      </form>
      <ul>
        {todos.map((newTodo) => (
          <li key={newTodo.id}>{newTodo.text}</li>
        ))}
      </ul>
    </div>
=======
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleUpdate, handleDelete }) => {
  return (
    <StyledUI>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </StyledUI>
>>>>>>> 23be3e73436abc24f3cc9e9a9a30337d556dc4ef
  );
};

export default TodoList;

const StyledUI = styled.div`
  background-color: aliceblue;
  border-radius: 1rem;
  width: 720px;
  height: auto;
  margin-left: 10px;
  margin-top: 20px;
  padding: 10px;
`;
