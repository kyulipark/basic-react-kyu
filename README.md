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


✨ update  : forEach를 대신해, map으로 업데이트 기능 구현!

