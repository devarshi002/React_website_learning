import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=' w-full  py-20 rounded-3xl bg-green-500'>
      <div className='text border-t-2 border-b-2 py-11 border-zinc-100 flex  overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className=' text-[22vw] leading-none font-semibold uppercase    pt-10 -mb-[3vw] -mt-[3vw] py-10 pr-20'>We are Ochi</motion.h1> 
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className=' text-[22vw]  leading-none  font-semibold uppercase  pt-10 -mb-[3vw] -mt-[3vw] py-10 pr-20'>We are Ochi</motion.h1>
        

      </div>
    </div>
  )
}

export default Marquee
