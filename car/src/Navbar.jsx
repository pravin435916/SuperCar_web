import React from 'react'
import { FaCar } from "react-icons/fa";
import './custom.css'
function Navbar() {
  return (
    <>
     <div className='absolute w-full flex justify-between items-center bg-transparant px-10 py-5 shadow-2xl playfair'>
       <span className='text-3xl'><FaCar /></span>
    <div className='flex gap-10 items-center text-sm font-semibold cursor-pointer'>
        <span>Gallery</span>
        <span>SuperPowers</span>
        <span>Why us</span>
        <span>Process</span>
        <span>Testimonial</span>
    </div>
    <button className='px-4 py-2 border border-black rounded-full shadow-md'>sign in</button>
     </div>
    </>
  )
}

export default Navbar