import React from 'react'
import Tilt from 'react-parallax-tilt'; 

const Button = ( { id, text, containerClass, leftIcon, rightIcon, buttonType } ) => {
  // button hover sfx
  const playHoverSound = () => {
    let hover = new Audio("/audio/button-hover.wav")
    hover.play()
  }

  return (
    <Tilt scale='1.1' tiltMaxAngleX='20' tiltMaxAngleY='20' tiltReverse className='w-fit mt-auto'>
      <button id={id} className={`button-hover button-hover-${buttonType} group relative cursor-pointer overflow-hidden bg-violet-50 z-10 w-fit rounded-full px-7 py-3 text-black ${containerClass}`} onMouseEnter={playHoverSound}>
          {leftIcon}
          <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
              <div>{text}</div>
          </span>
          {rightIcon}
      </button>
    </Tilt>
  )
}

export default Button