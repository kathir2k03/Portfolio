import React from 'react'
import AboutImg from '../assets/about.png'


const About = () => {
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2'>
        <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 mb-5 w-[170px] font-bold border-primary'>About Me</h1>
        <p className='pb-5'>Hi, My name is kathiravan. I am a front-End React developer. I built beautiful websites with React.js and Tailwind CSS </p>
        <p className='pb-5'>I am proficient in Frontend skills like HTML, CSS, JavaScript, React.js, BootStrap 3.1, Taiwlind CSS</p>
        </div>
        </div>
    </section>
  )
}

export default About