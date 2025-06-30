import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5';

export default function MobileNav() {
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className=' absolute top-4 left-1  md:hidden block'>
        <button onClick={()=>{
            toggleMenu();
        }} className='bg-transparent text-white font-bold'>
            <IoMenu color='white' size={30}/>
        </button>
        <div className={`flex ${isOpen==true ? 'block' :"hidden"} px-2 py-2 transition-all duration-500 h-screen bg-red-600  w-[50vw]  flex-col justify-start text-white  items-center gap-10`}>
        <img src="/logo.png" alt="logo image"
          className='w-[90px]' />
        <ul className='flex flex-col space-y-3   gap-[20px] cursor-pointer '>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
    </div>
  )
}
