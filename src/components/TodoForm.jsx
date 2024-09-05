import { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ addTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    //새로고침 방지
    e.preventDefault();
    //유효성검사
    if (!newTodo.trim()) {
      return;
    }
    const newTodoObj = {
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };
    // setTodos([...todos, { id: crypto.randomUUID(), text: newTodo }]);
    addTodos(newTodoObj);
    setNewTodo("");
  };

  const handleInputChange = (e) => setNewTodo(e.target.value);

  return (
    <StyledForm>
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
    </StyledForm>
  );
};

export default TodoForm;

const StyledForm = styled.div`
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;

  padding: 8px;
  border-radius: 1rem;
  width: 720px;
  height: 120px;
  color: white;

  input {
    height: 20px;
    margin-right: 8px;
  }
`;
