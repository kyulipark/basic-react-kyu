Todo 만들기 초안,</br>
yarn create vite 명령어로 vit 만들기.
현재 폴더에서 만들려면 . 누르면 된다.

css 외울것,</br>
<img src='https://teamsparta.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83c75a39-3aba-4ba4-a792-7aefe4b07895%2Fbf5aace6-8f0f-46cc-bda8-b14a901881d8%2FUntitled.png?table=block&id=699adf24-b18d-4649-bd33-6e10bbfdc439&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=2000&userId=&cache=v2' width="400" height='auto'>

- app.jsx를 초기화 해준다.
- components 폴더를 만들어 TodoList.jsx파일을 생성한다.
- app.jsx에 TodoList.jsx를 import한다.(이때에 시멘틱 태그 잊지말기!)
- .map메서드로 리스트를 불러온다.
- css를 만져서 틀을 잡는다.

</br>
</br>
✨ update  : todo 추가 기능 구현!

`useStat();` 사용,

 `e.preventDefault();`  _새로고침 방지_

`.trim()` 공백을 없애줌.

` <Form>,<ul>,<li>,<header>,<footer> 등 ` _시멘틱 테그 사용!_
`form>input:text+button:submit`을 _하면 자동완성으로 코드를 짜준다._
`id: crypto.randomUUID()`를 _하면 고유한 아이디를 생성해줌._
`import` 단축키, 마지막 부분에 커서를 두고 `command+i`

 //유효성 검사 
```
if(!newTodo.trim()){
return;
}
``` 

 // 구조분해할당으로 배열 재배열하기,
```
setTodos([...todos, { id: crypto.randomUUID(), text: newTodo }]);
setNewTodo("");
```

//input도 완벽이해, 외우기.
```
 <input
          type="text"
          name="todo"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Todo를 추가해주세요!"
   />
  <button type="submit">추가하기</button>
```
//.map 완벽히 이해하기, 항상 key가 있어야한다.
```
 <ul>
        {todos.map((newTodo) => (
          <li key={newTodo.id}>{newTodo.text}</li>
        ))}
  </ul>
```

</br>
</br>
✨ update  : map으로 업데이트 기능 구현!
**forEach와 map 두가지 방식으로 업데이트 구현!**
forEach 보다 map이 더 효율적이다,

`forEach`는 배열을 순회하면서 각 요소를 처리하지만 새로운 배열은 반환하지 않기에, 직접 새로운 배열을 만들어야한다.
`map`은 각 요소를 순회하면서 새로운 배열을 반환하여, 업데이트와 삭제를 구현하는데에 적합하다.
`!논리연산자`와 `...스프레드 오퍼레이터`를 사용하면 코드를 좀 더 깔끔하게 작성할 수 있다.

`forEach`순서
  1. 새로운 배열을 만들 빈 배열을 선언.
  2. todos 배열의 각 항목을 순회.
  3. 현재 목의 id가 수정하려는 id와 일치하는지 확인.
  4. 일치한다면, completed상태를 반전시킨 새 항목 생성.
  5. 수정된 항목을 새로운 배열에 추가.
  6. 일치하지 않다면, 기존 항목 그대로 배열에 추가.
  7. 상태를 새로운 배열로 업데이트

`.map`순서
  1. todos 배열의 각 항목을 순회하고, 수정된 항목을 반환해 새 배열을 만듬.
  2. 현재 항목의 id가 수정하려는 id와 같은지 확인.
  3.  id가 일치하면, completed 상태를 반전시킨 새 항복 반환.
  4. id가 일치하지 않으면, 기존 항목 그대로 반환.
  5. 상태를 새로운 배열로 업데이트

map이 좀더 깔끔하게 코드를 짤 수 있다.


</br>
</br>
✨ update  : 삭제 기능 구현!

1. 삭제 버튼을 추가한다.
2. onClick과 화살표 함수로 이벤트를 작성한다.
 - `filter`메서드로 해당 `id`를 가진 항목을 필터링한다.
```
const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id === id ? false : true;
    });
```

3. 필터링 된 배열을 받아 현재 Todo 리스트를 가지고 있는 상태를 업데이트한다.
 - 삭제는 `alert`을 띄워 주는 것이 좋다.
`setTodos(filteredTodos);
    alert("삭제되었습니다.");`

4. 삭제 버튼과 이벤트를 연결한다.
` <button onClick={() => handleDelete(todo.id)}>삭제</button>`

</br>
</br>
🎉 add : 컴포넌트 분리!

먼저, components의 폴더를 src폴더 안에 만든다.
해당 폴더 안에 `TodoContainer.jsx`, `TodoForm`, `TodoList`, `TodoItem.jsx`의 파일을 만들어서,
각각의 기능에 따라 분리해 보았다.

React는 컴포넌트 하나에 한가지 기능을 넣어야 한다. 마치, 블록처럼!
그래야 가독성과, 유지보수, 재사용성이 높아진다.
컴포넌트 분리를 연습하자! `import`를 잘 확인해야한다!
