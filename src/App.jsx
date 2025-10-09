import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Video from './components/Video'

// import Summary from './components/Summary'

function App() {
  const [navActive, setNavActive] = useState(false)

  return (
    <>
    <div className='w-full h-full overflow-x-hiddens relative ' >
      <Navbar active={navActive}  />
      <Hero setNavActive={setNavActive} />
      {/* <Video/> */}
    </div>
    </>
  )
}

export default App
