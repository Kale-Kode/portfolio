import React from 'react'
import { BsBraces } from "react-icons/bs";
import Button from './Button.jsx'

const BentoCard = ( { src, text, subtext, isComingSoon } ) => {
  return (
    <div className='relative size-full'>
        <video src={src} loop muted autoPlay className='absolute left-0 top-0 size-full object-cover object-center'/>
        
        <div className='relative z-10 flex size-full flex-col justify-start p-5 text-blue-50'>
            <h1 className='bento-title special-font'>{text}</h1>
            {subtext && <p className='mt-3 max-w-64 text-xs md:text-base'>{subtext}</p>}
            <Button 
            id='coming soon' 
            text='Coming Soon' 
            rightIcon={<BsBraces />} 
            containerClass='mt-auto !bg-black text-blue-50 flex items-center justify-center gap-2 border-2 border-blue-50/50 opacity-60 hover:opacity-100 transition-all'
            />
        </div>
    </div>
  )
}

export default BentoCard