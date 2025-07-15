import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setCounter]=useState(0)
// let counter=15
const addValue = () => {
  // counter += 1;
  setCounter(PrevCounter=>PrevCounter+1)
  setCounter(PrevCounter=>PrevCounter+1)
  setCounter(PrevCounter=>PrevCounter+1)
  setCounter(PrevCounter=>PrevCounter+1)

  console.log(counter);
}
const removeValue = () => {
  // counter -= 1;
setCounter(PrevCounter=>PrevCounter-1)
  setCounter(PrevCounter=>PrevCounter-1)
  setCounter(PrevCounter=>PrevCounter-1)
  setCounter(PrevCounter=>PrevCounter-1)
  console.log(counter);
}
  return (
    <>
     <h1>Coffe + react </h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br/>
     <button onClick={removeValue}>remove value</button>
     <p>footer: {counter}</p>
     </>
  )
}

export default App
