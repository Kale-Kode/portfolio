import React from 'react'
import { useState, useRef } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  // STATES
  const [currentIndex, setCurrentIndex] = useState(1)
  const [prevIndex, setPrevIndex] = useState(1)
  const [videoAnimating, setVideoAnimating] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 4
  const nextVideoRef = useRef(null)

  // on mini video click: set clicked to true, and increment current video index (resets at totalVideos)
  const handleMiniVideoClick = () => {
    setHasClicked(true)
    setCurrentIndex(prevIndex => prevIndex % totalVideos + 1)
  }

  // increment loaded videos on load
  const handleVideoLoad = () => {
    setLoadedVideos(prev => prev + 1)
  }

  // the useGSAP hook triggers based on the dependencies value in the second argument
  // animate mini video player when currentIndex changes i.e. on click
  useGSAP(() => {
    if (hasClicked) {
      // make next video visible
      gsap.set('#next-video', {
        visibility: 'visible'
      })
      // make next video grow to fill the screen
      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        // make the next video begin playing right away, even while animating
        onStart: () => {
          setVideoAnimating(true)
          nextVideoRef.current.play()
        },
        onComplete: () => {
          setVideoAnimating(false)
          setPrevIndex(prevIndex => prevIndex % totalVideos + 1)
        },
      })
      // make the mini video frame animate to grow in
      gsap.from('#current-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut',
      })
    }
  }, {dependencies: [currentIndex], revertOnUpdate: true})


  // scroll animation for hero video frame
  useGSAP(() => {
    // apply trapzoid clip path to the video frame
    gsap.set('#video-frame', { 
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 12%',
    })
    // animate on scroll starting from a full clip path polygon
    gsap.from(('#video-frame'), {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
  })

  // retrieve a hero video from a given index
  const getVideoSrc = (index) => `videos/hero-${index}.gif`

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>

          <div>

            <div className='mask-clip-path absolute-center absolute z-50 cursor-pointer overflow-hidden rounded-lg'>
              <div onClick={handleMiniVideoClick} className={`origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100 ${videoAnimating ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                <img 
                ref={nextVideoRef} 
                src={getVideoSrc(currentIndex%totalVideos+1)}
                loop
                muted
                id="current-video"
                className='size-64 origin-center scale-150 object-cover object-center'
                onLoadedData={handleVideoLoad}
                />
              </div>
            </div>

            <img 
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className='absolute-center invisible z-20 size-64 object-cover object-center'
            onLoadedData={handleVideoLoad}
            />

            <img 
            src={getVideoSrc(prevIndex)}
            autoPlay
            loop
            muted
            className='absolute top-0 left-0 size-full object-cover object-center'
            onLoadedData={handleVideoLoad}
            />

          </div>

          <h1 className='special-font hero-heading absolute bottom-10 right-10 z-40 text-blue-75'>LI<b>U</b></h1>
          <div className='absolute top-0 left-0 z-40 size-full'>
            <div className='mt-24 px-5 sm:px-10'>
              <h1 className='special-font hero-heading text-blue-75'>K<b>A</b>ILE</h1>
              <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>Front end developer and AI enthusiast.<br />Creating applications for the future.</p>
              <Button id="explore-projects" text="Explore Projects" leftIcon={<TiLocationArrow />} containerClass="!bg-yellow-300 flex-center gap-1" />
            </div>
          </div>

        </div>
        
        <h1 className='special-font hero-heading absolute bottom-10 right-10 text-black'>LI<b>U</b></h1>

    </div>
  )
}

export default Hero