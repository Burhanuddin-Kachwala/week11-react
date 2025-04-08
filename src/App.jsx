
import './App.css'
import { useState } from 'react'
import One from './One.jsx'

function App() {
  let [counter,setCounter] = useState(0);// default value of counter is 0
  const addValue = () => {
    console.log("Incrementing count");
    setCounter(counter + 1);
  }
  const decreaseValue = () => {
    console.log("Decrementing count");
    setCounter(counter - 1);
  }



  return (
    <>
      <One />    
      <h1>App Component</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Increment</button>&nbsp;
      <button onClick={decreaseValue}>Decrement</button>
    </>
  )
}

export default App
