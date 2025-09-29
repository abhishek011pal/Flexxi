import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Summary from './components/Summary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Summary/>
    </>
  )
}

export default App
