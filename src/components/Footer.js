import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-[#92313b] w-full h-full text-white pt-20'>
            <div className='text-center lg:tracking-[-0.5em] md:tracking-[-0.2em] tracking-tighter leading-none lg:mb-24 md:mb-20 mb-10'>
            <span className='lg:text-8xl md:text-5xl text-3xl'>Developing </span>
            <span className='lg:text-8xl md:text-5xl text-3xl font-bold relative'>Frontend</span>
            <p className='lg:text-8xl md:text-5xl text-3xl'><span className='playfair italic'>C</span>onnect Me</p>
        </div>
            <div className='lg:max-w-7xl mx-auto'>
                <ul className='flex justify-center'>
                    <li className='pr-10'><NavLink to='https://github.com/Suho01'><FontAwesomeIcon icon={faGithub} className='text-white hover:text-black duration-500 lg:text-9xl md:text-8xl text-7xl' /></NavLink></li>
                    <li><NavLink to='https://www.youtube.com/@suhochofree/featured'><FontAwesomeIcon icon={faYoutube} color='white' className='text-white hover:text-red-600 duration-500 lg:text-9xl md:text-8xl text-7xl' /></NavLink></li>
                </ul>
                <p className='text-white text-center py-20'>Copyright 2023. 이지연 all rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer