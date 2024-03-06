import React from 'react'

function Papers() {
  return (
    <div className=' w-full h-screen bg-zinc-900 flex gap-5 items-center px-20'>
        <div className='cardcontainer h-[50vh] w-1/2'>
          <div className='card relative w-full h-full bg-[#004d43] rounded-3xl flex items-center justify-center '>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
             <button className=' absolute left-10 bottom-10 text-white px-5 py-1 border-2 border-green-400 rounded-full '>&copy;2019</button>
          </div>
        </div>

        <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
          <div className='card relative flex items-center justify-center w-1/2 h-full bg-[#44d4c1] rounded-3xl'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
             <button className=' absolute left-10 bottom-10 text-white px-5 py-1 border-2 border-green-800 rounded-full '>&copy;2019</button>
          </div>
          <div className='card relative flex items-center justify-center w-1/2 h-full bg-[#4acdbb] rounded-3xl'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
             <button className=' absolute left-10 bottom-10 text-white px-5 py-1 border-2 border-green-800 rounded-full '>&copy;2019</button>
          </div>
        </div>
      
    </div>
  )
}

export default Papers
