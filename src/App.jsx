import React from 'react'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Papers from './components/Papers'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';




function App() {

 const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full min-h-screen  text-white bg-zinc-900'>
      
     <Navbar/>
     <MainPage/>
     <Marquee/>
     <About/>
     <Eyes/>
     <Feature/>
     <Papers/>
     <Footer/>
      
    
    </div>
  )
}

export default App
