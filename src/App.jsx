import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Summary from './components/Summary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-full' >
      <div className='w-full h-full bg-fixed' > 
        <Navbar/>
        <Hero/>
      </div>
      
      <div className='absolute  ' >
        <Hero/>
      </div>

    </div>
    </>
  )
}

export default App
