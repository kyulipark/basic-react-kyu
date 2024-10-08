import { useState } from "react";
import { SAMPLE_TODOS } from "../constants/sample-todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";

const TodoContainer = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (newTodoObj) => setTodos([newTodoObj, ...todos]);

  //업데이트
  const handleUpdate = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = {
          //스프레트 오퍼레이트로 간단히 작성가능!
          ...todo,
          completed: !todo.completed,

          //   id: todo.id,
          //   text: todo.text,
          //   completed: !todo.completed,
        };
        return newTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //삭제
  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id === id ? false : true;
    });

    setTodos(filteredTodos);
    alert("삭제되었습니다.");
  };
  return (
    <TodoContainerWrapper>
      <TodoDashboard all={todos.length} completed={6} pending={13} />
      {/* <TodoForm addTodos={addTodos} /> */}
      <TodoList
        todos={todos}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </TodoContainerWrapper>
  );
};

export default TodoContainer;

const TodoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
