
import './App.css'
import { useState } from 'react'
import Card from "./Components/Card.jsx";



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
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Increment</button>&nbsp;
      <button onClick={decreaseValue}>Decrement</button>
      <Card
        title="Internship"
        description="This internship offers great opprtunity to young students who have a zest in laravel"
      />
      <Card
        title="Apprenticeship"
        description="This Apprenticeship offers great opprtunity to young adults who have a zest in MERN stack"
      />
    </>
  );
}

export default App
