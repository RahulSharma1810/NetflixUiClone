import React, { useEffect, useRef } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import { logout } from '../firebase';
import MobileNav from './MobileNav';
const Navbar = () => {

  const navRef  = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <>
    <div ref={navRef} className='w-full max-h-full flex px-10 py-6 justify-between text-xl text-yellow-50 bg-transparent fixed z-50 ' >
      <div className='flex items-center gap-10'>
                <MobileNav/>
        
        <img src="/logo.png" alt="logo image"
          className='w-[90px]' />
        <ul className='hidden md:flex gap-[20px] cursor-pointer '>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className='flex gap-[20px] items-center cursor-pointer' >
        <IoSearchOutline/>
        <p>Children</p>
        <CiBellOn/>
        <div className=' relative flex items-center gap-[20px] group cursor-pointer   '>
          <img src="/profile_img.png"
          className='hover'
            alt="" />
          <RxCaretDown/>
          <div className=' absolute top-full right-0 w-max px-[18px] py-[22px] rounded-[2px] underline group-hover:block z-[1] hidden'>
            <p className=' text-[13px] cursor-pointer' onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
export default Navbar