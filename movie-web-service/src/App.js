import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();  
    if(todo === "") return;
    setTodo("");
    setTodos((currentArray)=>[todo, ...currentArray]);
    // 기존 배열에 추가한 값이 배열의 가장 앞에 추가된다.
  }
  console.log(todos);
  // state를 직접적으로 수정하지 않는다.
  return (
    <div>
      <h1>My Todo ({todos.length})</h1>
      <form>
        <input 
          onChange={onChange}
          value={todo}
          type="text"
          placeholder='Write your to do...'
        />
        <button onClick={onSubmit}>Add to do</button>
      </form>     
      <hr />
      {
        <ul>{todos.map((item, i)=><li key={i}>{item}</li>)}</ul>
      }
    </div>
  );
}

export default App;