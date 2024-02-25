import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold bg-green-500 p-4 rounded-lg text-black mb-4'>Tailwind Test</h1>

      <Card name="Aditya" btnText = "click me"/>
      <Card name ="Chai" btnText = "visit me"/>
    </>
  )
}

export default App
