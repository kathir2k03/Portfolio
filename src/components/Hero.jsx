import React from 'react'
import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineFacebook, AiFillLinkedin } from "react-icons/ai";
const Hero = () => {
  return (
    <section id='hero' className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center '>
        <div className='md:w-1/2 flex-col'> 
        <h1 className='font-hero-font  text-white text-6xl'>Hi, <br /> Im <span className='text-black'>Kathiravan </span>
        <p className='text-2xl'>Im a React developer</p>
        <div className='flex py-10 '>
            <a href="#" className='pr-5 hover:text-black'><AiOutlineTwitter size={40}/></a>
            <a href="#" className='pr-5 hover:text-black'><AiOutlineFacebook size={40}/></a>
            <a href="http://www.linkedin.com/in/kathiravan-m-754592288"  target="_blank" className='hover:text-black'><AiFillLinkedin size={40}/></a>
        </div>
        </h1>
        </div>    
        <img className='md:w-1/3' src={HeroImg} />
    </section>
  )
}

export default Hero;