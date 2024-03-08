
import { useState } from "react"
function App() {

  let [counter,setCounter] = useState(15)

  const addValue = () =>{
    counter = counter+1
    setCounter(counter)
  }

  const removeValue = ()=>{
    counter = counter -1 
    setCounter(counter)
  }

  return (
    <>
    <h1>The value is {counter}</h1>
    <button onClick={addValue}> Add value {counter}</button>
    <button onClick={removeValue}> remove value {counter}</button>

    </>
  )
}

export default App
