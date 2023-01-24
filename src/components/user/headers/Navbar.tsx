import React from 'react'
import { useState } from "react";

export default function Navbar() {

  const [navbar, setnavbar] = useState(false);

  return (
    
    <nav className="bg-blue-600 items-center fixed w-full h-20 flex justify-between px-4 md: shadow-black shadow-md ">
      {/* <Image/> */}
      
      <div className='text-sky-100 border-spacing-0 text-3xl font-mono px-5 '>E-CLINIC</div>
    
    <div className='hidden md:block'>
    <ul className='flex gap-4'>
      <li className='cursor-pointer text-white border p-2'>Doctors</li>
      <li className='cursor-pointer text-white border p-2'>Hospital</li>
      <li className='cursor-pointer text-white border p-2'>Labs</li>
      <li className='cursor-pointer text-white border p-2'>Sign in</li>
      <li className='cursor-pointer text-white border p-2'>Register</li>
    </ul>
    </div>


    <button className='text-white animate-bounce w-20 h-10 border p-2 sm:block md:hidden' onClick={()=> setnavbar( prevState => !prevState)}> Click! </button>

    {navbar === true? 
    
    <div className='sm:block flex-column bg-sky-500 items-center fixed w-full md:hidden mt-72'>
      <li className='cursor-pointer text-white border p-2'>Doctors</li>
      <li className='cursor-pointer text-white border p-2'>Hospital</li>
      <li className='cursor-pointer text-white border p-2'>Labs</li>
      <li className='cursor-pointer text-white border p-2'>Sign in</li>
      <li className='cursor-pointer text-white border p-2'>Register</li>
    
    </div> 

    :null} 
    
    </nav>
  )
}
