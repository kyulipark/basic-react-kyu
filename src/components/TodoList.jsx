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
