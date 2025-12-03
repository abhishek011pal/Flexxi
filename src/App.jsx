import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Video from './components/Video'
import Crousel from './components/Crousel'


// import Summary from './components/Summary'

function App() {
  const [navActive, setNavActive] = useState(false)

  return (
    <>
    <div className='w-full h-full overflow-x-hiddens relative flex gap-4 flex-col ' >
      <Navbar active={navActive}  />
      <Hero setNavActive={setNavActive} />
      {/* <Video/> */}
      <Crousel/>
    </div>
    </>
  )
}

export default App
