import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Summary from './components/Summary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen h-screen' >
      {/* <div className='w-full h-full' >  */}
        <Navbar/>
        <Hero/>
      {/* </div> */}

    </div>
    </>
  )
}

export default App
