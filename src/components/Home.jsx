import React from 'react'
import Navbar from './Navbar'
import TitleCards from './TitleCards'
import Footer from './Footer'
import MobileNav from './MobileNav'

const Home = () => {
  return (
    <>
    
    <div className=' bg-transparent '>
        <Navbar/>
        <div className='relative z-10 pt-24 '>
          
          <img src="/hero_banner.jpg"
            className='w-full [mask-image:linear-gradient(to_right,transparent,black)] [--webkit-mask-image:linear-gradient(to_left,transparent,black)]'
            alt="" />
            
          <div className='overflow-y-hidden absolute w-[100%] pl-[6%] bottom-0 z-10'>
            <img src="/hero_title.png"
              className='hidden md:flex w-[90%] max-w-[420px] mb-[30px]' alt="" />
            <p className='text-white max-w-[700px] text-[16px] mb-[20px] hidden md:flex   '>Discovering his ties to a secret ancient order, a young man living in modern Istanbul emarks on a quest to save the city from an immortal enemy.</p>

            <div className='hidden md:flex gap-[10px] mb-[50px] items-center '>
              <button className=' cursor-pointer  h-[40px] w-[70px] px-2 py-2 flex bg-white hover:bg-[#6d6d6eb3]'><img src="/play_icon.png"
                className='w-[20px] h-[20px]' alt="" />Play</button>
              <button className=' cursor-pointer bg-slate-600 flex h-[40px] py-2 px-1 hover:bg-[#ffffffbf]'><img src="/info_icon.png"
                className='h-[25px]' alt="" />More Info</button>
            </div>
            <TitleCards/>
          </div>
        </div>
        <div className='px-[6%]'>
            <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
            <TitleCards title={"Only on Netflix"} category={"popular"}/>
            <TitleCards title={"Upcoming"} category={"upcoming"}/>
            <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Home