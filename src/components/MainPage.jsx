import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function MainPage() {
  
  return (
    <div data-scroll data-scroll-secction data-scroll-speed="-.3" className=' w-full h-screen bg-zinc-900 pt-2'>
      <div className='textstructure mt-52 px-20'>
        {["We Create","Eye Opening","Presentations"].map((item, index)=>{
          return  <div className='masker'>
            <div className=' w-fit flex  items-end overflow-hidden'>
              {index === 1 && (
              <motion.div  initial={{width:0}} animate={{width:   "9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration: 1}} className=' mr-1vw   w-[9vw]   rounded-md h-[5vw]  -top-[0.1rem] relative bg-green-500'></motion.div>)}
          <h1 className="  -mb-[1vw] flex items-center uppercase text-[6.8vw]  h-full leading-[7vw]  pt-[0.7rem] tracking-tighter  font-mono  font-light">{item}</h1>
      </div></div>
        })}
        
      </div>
      <div className=' border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index)=> <p className=' text-md font-light tracking-tight leading-none'>{item}</p> 
        )} <div className='start flex items-center gap-5'>
        <div className=' px-5 py-2 border-[2px]  border-zinc-500  flex text-md font-light uppercase rounded-full'>start the project</div>
        <div className=' w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
          <span className=' rotate-[45deg]'>
            <FaArrowUpLong />
          </span>
        
        </div>
      

      </div>
    </div>
      </div>
     
  )
}

export default MainPage
