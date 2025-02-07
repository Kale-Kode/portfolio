import React from 'react'
import BentoCard from './BentoCard'

const Projects = () => {
  return (
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-circular-web text-lg text-blue-50'>Explore My Projects</p>
                <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>I'm always searching for new domains to improve my skills and bring my ideas to life. Check out a selection of my side projects below, ranging from web apps to reinforcement learning.</p>
            </div>
        
            <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard src='videos/feature-1.mp4' text='Bloxnet' subtext="A social platform for climbers, connecting the sport's community of beginners and hardcore athletes alike." isComingSoon/>
            </div>

            <div className='grid h-[135vh] grid-cols-2 grid-row-3 gap-7'></div>

        </div>
    </section>
  )
}

export default Projects