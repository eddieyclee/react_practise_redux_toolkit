import { useState } from "react"
import CounterRender from "./components/CounterRender";
import CounterButton from "./components/CounterButton";
import Todo from "./components/Todo";

function App() {
  // count屬性
  // const [count, setCount] = useState(0);
  
  // addCount函式
  // const addCount = () => {
  //   setTimeout(() => {
  //     setCount(count + 2)
  //   }, 200)
  // }

  // 加入元件後 並透過Redux Toolkit 傳遞資料
  return (
    <>
      <Todo />
      <hr />
      {/* <CounterRender count={count} /> */}
      <CounterRender />
      <hr />
      {/* <CounterButton addCount={addCount} /> */}
      <CounterButton />
    </>
  )
}

export default App