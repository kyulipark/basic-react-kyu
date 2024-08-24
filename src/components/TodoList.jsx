import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleUpdate, handleDelete }) => {
  return (
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
  );
};

export default TodoList;
