import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle = ( { text, containerClass}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({scrollTrigger: {
        trigger: containerRef.current,
        start: '100 bottom',
        end: 'center bottom',
        toggleActions: 'play none none reverse',
      }})

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.out',
        stagger: 0.03,
      })
    }, containerRef)
  }, [])

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
        {text.split('<br>').map((line, i) => {
            return <div key={i} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
                {line.split(' ').map((word, j) => {
                    return <span 
                    key={j}
                    className='animated-word'
                    dangerouslySetInnerHTML={{__html: word}}
                    />
                })}
            </div>
        })}
    </div>
  )
}

export default AnimatedTitle