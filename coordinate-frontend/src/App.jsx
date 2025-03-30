import { useState } from 'react'
import Coordinate from'./page/Coordinate';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Coordinate></Coordinate>
    </>
  )
}

export default App
