import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleUpdate, handleDelete }) => {
  return (
    <TaskSection>
      <TaskdHeader>
        <h1>Tasks</h1>
      </TaskdHeader>
      <TaskList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </TaskList>
    </TaskSection>
  );
};

export default TodoList;

const TaskSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TaskdHeader = styled.div`
  h1 {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
