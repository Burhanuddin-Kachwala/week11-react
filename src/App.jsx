
import './App.css'
import { useState } from 'react'
import Card from "./Components/Card.jsx";

let jobs = [
  {
    id: 1,
    title: "Internship",
    description: "This internship offers great opprtunity to young students who have a zest in laravel",
  },
  {
    id: 2,
    title: "Apprenticeship",
    description: "This Apprenticeship offers great opprtunity to young adults who have a zest in MERN stack",
  },
  {
    id: 3,
    title: "Fellowship",
    description: "This Fellowship offers great opprtunity to young adults who have a zest in AI/ML",
  },
  {
    id: 4,
    title: "Scholarship",
    description: "This Scholarship offers great opprtunity to young adults who have a zest in Data Science",
  },
  {
    id: 5,
    title:"Employment",
    description: "This Employment offers great opprtunity to young adults who have a zest in Software Development",
  },
];

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
    <div className='flex flex-wrap justify-center gap-3'>
      {jobs.map(job => (
        <Card         
          title={job.title}
          description={job.description}
        />
      ))}
      </div>
    </>
  );
}

export default App
