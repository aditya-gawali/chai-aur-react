import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(1);
  const addValue = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);

  }
  const removeValue = () => {
    if (count != 0) {
      setCount(count - 1)
    }

  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {count}</h2>

      <button
        onClick={addValue}
      >Add Value</button> <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
