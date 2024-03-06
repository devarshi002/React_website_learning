import React from 'react'

function Navbar() {
  return (
    <div className=' fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
      <div className="logo w-10 h-10 ">
      <img className='w-full h-full' src="logo.png" alt="" />
      </div>
      <div className="links flex gap-10 ">
        {["services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) =>(
            <a key={index} className={` text-lg capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
