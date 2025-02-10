import React, { useState, useRef, useEffect } from 'react'
import Button from './Button.jsx'
import { BsBraces } from "react-icons/bs";
import { useWindowScroll } from 'react-use'; 
import { gsap } from 'gsap';

const navItems = ['About', 'Projects', 'Tech Stack', 'Contact']

const Navbar = () => {
  const navContainerRef = useRef(null)
  const audioRef = useRef(null)
  const [audioPlaying, setAudioPlaying] = useState(false)
  const [indicatorActive, setIndicatorActive] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [navVisible, setNavVisible] = useState(true)

  // toggle states on click
  const toggleAudio = () => {
    setAudioPlaying(prev => !prev)
    setIndicatorActive(prev => !prev)
  }

  // play audio when audioPlaying is true
  useEffect(() => {
    if (audioPlaying) {
        audioRef.current.play()
    } else {
        audioRef.current.pause()
    }
  }, [audioPlaying])

  // whenever user scrolls, hide or show the navbar
  const { y: currentScrollY } = useWindowScroll()
  useEffect(() => {
    // user at top of screen, hide black bg
    if (currentScrollY == 0) {
        setNavVisible(true)
        navContainerRef.current.classList.remove('floating-nav')
    } 
    // otherwise if scrolling down
    else if (currentScrollY > prevScrollY) {
        setNavVisible(false)
        navContainerRef.current.classList.add('floating-nav')
    }
    // otherwise if scrolling up
    else if (currentScrollY < prevScrollY) {
        setNavVisible(true)
        navContainerRef.current.classList.add('floating-nav')
    }
    //keep track of scroll Y pos
    setPrevScrollY(currentScrollY)
  }, [currentScrollY])

  useEffect(() => {
    // if nav become visible, fade down and in
    // if nav not visible, fade up and out
    gsap.to(navContainerRef.current, {
        y: navVisible ? 0 : -100,
        opacity: navVisible ? 1 : 0,
        duration: 0.2,
    })
  }, [navVisible])

  // button hover sfx
  const playHoverSound = () => {
    let hover = new Audio("/audio/button-hover.wav")
    hover.play()
  }

  return (
    <div ref={navContainerRef} className='fixed inset-x-2 top-4 z-50 h-16 border-none transition-all duration-700'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-between px-6'>
                <div className='flex items-center gap-7'>
                    <img src='/img/logo.png' alt='logo' className='w-10 invert'/>
                    <Button 
                    id='projects' 
                    text='projects' 
                    rightIcon={<BsBraces />} 
                    containerClass='bg-yellow-300 md:flex hidden items-center justify-center gap-1'
                    buttonType={1}
                    />
                </div>

                <div className='flex h-full items-center'>
                    <div className='hidden md:block'>
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className='nav-hover-btn !text-blue-50' onMouseEnter={playHoverSound}>
                                {item}
                            </a>
                        ))}
                    </div>

                    <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudio}>
                        <audio ref={audioRef} className='hidden' src='/audio/ambient.wav' loop />
                        {[1,2,3,4].map(n => (
                            <div key={n} className={`indicator-line ${indicatorActive ? 'active' : ''}`} style={{
                                animationDelay: `${n*0.1}s`,
                                height: n==2 || n==3 ? '12px' : '8px',
                                marginTop: n==1 || n==4 ? '3px' : '0px',
                            }}/>
                        ))}
                    </button>
                </div>
            </nav>
        </header> 
    </div>
  )
}

export default Navbar