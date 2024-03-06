import React, { useEffect, useState } from 'react'

function Eyes() {
    const [leftEyeRotate, setLeftEyeRotate] = useState(0);
    const [rightEyeRotate, setRightEyeRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaXLeft = mouseX - window.innerWidth * 0.35;
            let deltaYLeft = mouseY - window.innerHeight / 2;

            let deltaXRight = mouseX - window.innerWidth * 0.65;
            let deltaYRight = mouseY - window.innerHeight / 2;

            let angleLeft = Math.atan2(deltaYLeft, deltaXLeft) * (180 / Math.PI);
            let angleRight = Math.atan2(deltaYRight, deltaXRight) * (180 / Math.PI);

            setLeftEyeRotate(angleLeft - 180);
            setRightEyeRotate(angleRight - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);



  return (
    <div className=' eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className=' absolute flex gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]   '>
                <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className=' relative  w-2/3 h-2/3 rounded-full bg-zinc-900'>
                   <div style={{transform: `translate(-50%, -50%) rotate(${leftEyeRotate}deg)`}} className=' absolute line top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                <div className='  w-10 h-10 rounded-full bg-zinc-100'></div>

                    </div> 

                </div>

                </div>
                <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className=' relative  w-2/3 h-2/3 rounded-full bg-zinc-900'>
                <div style={{transform: `translate(-50%, -50%) rotate(${rightEyeRotate}deg)`}} className=' absolute line top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                <div className='  w-10 h-10 rounded-full bg-zinc-100'></div>

                    </div> 
                </div>

                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Eyes
