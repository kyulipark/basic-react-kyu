import React, { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
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
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text} - {""}
              {todo.completed ? <span>완료됨</span> : <span>미완료</span>}
            </p>
            <button onClick={() => handleUpdate(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
