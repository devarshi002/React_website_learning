import { motion, useAnimation } from 'framer-motion';
import { Power4 } from "gsap/all";
import React, { useState } from 'react';


function Feature() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index)=> {
    cards[index].start({y: "0"})
  }
  const handleHoverEnd = (index)=> {
    cards[index].start({y: "100%"})
  }
  
  
  return (
    <div className=' w-full py-10 bg-[#042324]'>
        <div className=' w-full px-20 border-b-[1px] border-zinc-700 pb-[40px]'>
            <h1 className=' text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1></div>

           <div className=' px-20'>
           <div className="cards w-full flex gap-10  mt-10 ">
                <motion.div 
                onHoverStart={()=>handleHover(0)}
                onHoverEnd={()=>handleHoverEnd(0)}
                className=' cardcontainer w-1/2 h-[75vh] relative  '>
                  
                  <h1 className=' absolute flex text-[#cdea68] z-[9] text-8xl  leading-none tracking-tighter overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
                   {"FYDE".split('').map((item, index) =><motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}} className=' inline-block ' >{item}</motion.span>)}
                </h1>
                   <div className=' card w-full h-full rounded-xl '>
                     <img className=' w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                   </div>
                </motion.div>
                
                <motion.div
                onHoverStart={()=>handleHover(1)}
                onHoverEnd={()=>handleHoverEnd(1)}
                className='  cardcontainer w-1/2 h-[75vh] relative '>
                <h1 className=' absolute flex text-[#cdea68] z-[9] text-8xl leading-none tracking-tighter right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2'>
                   {"VISE".split('').map((item, index) =><motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}} className=' inline-block ' >{item}</motion.span>)}
                </h1>

                   <div className=' card w-full h-full rounded-xl overflow-hidden'>
                     <img className=' w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                   </div>
                </motion.div>
            </div>





            

            
           </div>
           
      
    </div>
  )
}

export default Feature
