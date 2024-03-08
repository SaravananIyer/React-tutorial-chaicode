import { useState } from 'react'
import './App.css'

function App() {
let [count,setCount]=useState(10)

function addItem (){
  count=count+1
  setCount(count)
}

function removeItem(){
  count =count-1
  setCount(count)

}

  return (
    <>
    <h1>The count is {count}</h1>
    <button onClick={addItem}>Increment {count}</button>
    <button onClick={removeItem}>Decrement {count}</button>
    

    </>

  )
}

export default App
