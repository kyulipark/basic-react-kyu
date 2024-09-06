import styled from "styled-components";

const TodoItem = ({ todo, handleUpdate, handleDelete }) => {
  return (
    <TaskItem key={todo.id}>
      <TaskItemContent
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text} - {""}
        {todo.completed ? <span>완료됨</span> : <span>미완료</span>}
      </TaskItemContent>
      <TaskItemActions>
        <TaskItemActionButton
          onClick={() => handleUpdate(todo.id)}
          color="teal"
        >
          {todo.completed ? "취소" : "완료"}
        </TaskItemActionButton>
        <TaskItemActionButton
          onClick={() => handleDelete(todo.id)}
          color="tomato"
        >
          삭제
        </TaskItemActionButton>
      </TaskItemActions>
    </TaskItem>
  );
};

export default TodoItem;

const TaskItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
`;

const TaskItemContent = styled.div``;

const TaskItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const TaskItemActionButton = styled.button`
  color: aliceblue;
  background-color: ${({ color }) => color};

  padding: 0.35rem 0.55rem;
  border-radius: 0.3rem;

  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;
