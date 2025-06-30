import React from 'react'

const Footer = () => {
  return (
    <div className='px-[13%] py-[4%] max-w-full m-0'>
        <div className='flex gap-[10px]
            my-[0px] w-[20px] mb-2'>
            <img src="/facebook_icon.png" alt="" /> 
            <img src="/instagram_icon.png" alt="" /> 
            <img src="/twitter_icon.png" alt="" /> 
            <img src="/youtube_icon.png" alt="" /> 
        </div>
        <ul className='text-white grid sm:grid-cols-2 md:grid-cols-4 gap-[8px] text-sm '>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
        <p className='copyright-text text-white  '>0-1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer