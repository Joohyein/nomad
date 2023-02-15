import { useState } from "react";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) =>{
    const {
      currentTarget : {value},
    } = event;
    // const value = event.currnetTarget.value
    setValue(value);
  };
  // event에 type 추가하기. ReactJs 내에 있는 React에서 FormEvent
  // 어떤 종류의 Element가 이 onChange 이벤트를 발생시킬지 특정
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  }
  return (
   <div>
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} type="text" placeholder="username" />
      <button>Log in</button>
    </form>
   </div>
  );
}
export default App;