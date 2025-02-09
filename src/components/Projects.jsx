import React from 'react'
import BentoCard from './BentoCard'
import { TiLocationArrow } from 'react-icons/ti'
import Tilt from 'react-parallax-tilt'; 

const Projects = () => {
  return (
    <section id="projects" className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-circular-web text-lg text-blue-50'>Explore My Projects</p>
                <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>I'm always searching for new domains to improve my skills and bring my ideas to life. Check out a selection of my side projects below, with everything from web apps to reinforcement learning for robotics.</p>
            </div>
        
            <Tilt scale='0.95' tiltMaxAngleX='4' tiltMaxAngleY='4' tiltReverse className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard src='videos/feature-1.mp4' text='Bloxnet' subtext="A social platform for climbers, connecting the sport's community of beginners and hardcore athletes alike." isComingSoon/>
            </Tilt>

            <div className='grid h-[135vh] grid-cols-2 grid-row-3 gap-7'>
              <Tilt scale='0.95' tiltMaxAngleX='4' tiltMaxAngleY='4' tiltReverse className='bento-tilt_1 row-span-1 md:row-span-2 md:col-span-1'>
                <BentoCard src='videos/feature-2.mp4' text='Hyped AI' subtext="Transforming personal fitness with a conversational AI that generates music for your workout." isComingSoon/>
              </Tilt>
              <Tilt scale='0.95' tiltMaxAngleX='4' tiltMaxAngleY='4' tiltReverse className='bento-tilt_1 row-span-1 ms-32 md:ms-0 md:col-span-1'>
                <BentoCard src='videos/feature-3.mp4' text='Signlate' subtext="Sign language interpretation technology to break the communication barrier between deaf and hearing poeple." isComingSoon/>
              </Tilt>
              <Tilt scale='0.95' tiltMaxAngleX='4' tiltMaxAngleY='4' tiltReverse className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                <BentoCard src='videos/feature-4.mp4' text='Shadow Hand' subtext="As part of the RL team in UoE's HumanEd society, we are training the Shadow Dextrous Hand to flip a cube in simulation." isComingSoon/>
              </Tilt>
              <Tilt scale='0.95' tiltMaxAngleX='4' tiltMaxAngleY='4' tiltReverse className='bento-tilt_2'>
                <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                  <h1 className='bento-title special-font max-w-80 text-black'>More Exciting Projects Coming Soon</h1>
                  <TiLocationArrow className='m-5 scale-[5] self-end'/>
                </div>
              </Tilt>
              <Tilt scale='0.95' tiltMaxAngleX='4' tiltMaxAngleY='4' tiltReverse className='bento-tilt_2'>
                <video src='/videos/feature-5.mp4' loop muted autoPlay className='size-full object-hover object-center'/>
              </Tilt>
            </div>

        </div>
    </section>
  )
}

export default Projects