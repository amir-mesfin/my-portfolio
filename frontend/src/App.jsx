import { useState } from 'react'
import './App.css'
import Page from './pages/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <main className="min-h-screen pt-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <Page />
      </main>
    </>
  )
}

export default App