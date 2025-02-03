import React from 'react'

const Button = ( { id, text, containerClass, leftIcon, rightIcon } ) => {
  return (
    <button id={id} className={`group relative cursor-pointer overflow-hidden bg-violet-50 z-10 w-fit rounded-full px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}

        <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
            <div>{text}</div>
        </span>

        {rightIcon}
    </button>
  )
}

export default Button