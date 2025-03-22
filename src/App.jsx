import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increament(){
    setCount(count+1)
  }

  return (
    <>
      <h1>Hello Kiya kar raho ho tussi??&#128516;</h1>
      <h2>Count: {count}</h2>
      <button onClick={increament}>Increase</button>
      <button onClick={()=> (count==0)? setCount(0):setCount(count-1)}>Decrease</button>
    </>
  )
}

export default App
