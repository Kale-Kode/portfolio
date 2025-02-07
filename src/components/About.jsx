import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  // animate the clip path of about image
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      // trigger and end when 800px past clip div
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    })
    // grow to full screen
    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    })
  })

  return (
    <div id='about' className='w-screen min-h-screen'>

      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2 className='font-general text-sm uppercase md:text-10px'>Welcome to creativity</h2>
        
        <AnimatedTitle text='Cre<b>a</b>ting web experiences<br>that deliver v<b>a</b>lue to the world.' containerClass='mt-5 !text-black text-center'/>
      
        <div className='about-subtext'> 
          <p>As the web grows, its applications must grow too.</p>
          <p>I strive to create immersive, interactive, and impactful tools that create value in people's lives.</p>
        </div>
      </div>

      <div className='h-dvh w-screen' id='clip'>
        <div className='mask-clip-path about-image'>
          <img src='img/about.jpg'
          alt='Background'
          className='absolute left-0 top-0 size-full object-cover'
          />
        </div>
      </div>
      
    </div>
  )
}

export default About