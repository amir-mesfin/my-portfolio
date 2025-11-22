import { useState } from 'react'
import './App.css'
import page from './pages/page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <page />
    </>
  )
}

export default App
