import React, { useState } from "react";

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
  );
};

export default TodoForm;
