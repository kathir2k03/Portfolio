import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'


export const Header = () => {
    const [toogleMenu, SetToogleMenu] = useState(false)
  return (
    <header id='header' className='flex justify-between px-5 py-2 bg-primary'>
       <a href="#" className='font-bold text-black'>Kathiravan </a>
       <nav className='hidden md:block'>
      
       <ul className='flex text-white'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume" target='blank'>Resume</a></li>
        <li><a href="#contact">Contact</a></li>
     </ul>
  
 
       </nav>
       { toogleMenu && <nav className='block md:hidden'>
       <ul onClick={() => SetToogleMenu(!toogleMenu)} className='flex flex-col text-white mobile-nav'> 
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
     </ul>
       </nav>}
   <button onClick={ () => SetToogleMenu (!toogleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
  )
}
