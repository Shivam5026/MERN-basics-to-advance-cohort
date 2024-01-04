
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);//[1, 2]

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){

  function onclickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onclickHandler}>Counter {props.count}</button>
}

export default App
