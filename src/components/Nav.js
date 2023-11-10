import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { toggleTheme } from '../store';
import { faBurger, faToggleOff, faToggleOn, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav() {
    const NavArray = ["<Work />", "<Projects />", "<Skills />", "<Contact />"];

    const theme = useSelector(state => state.dark);
    const dispatch = useDispatch();

    const [hamburger, setHamburger] = useState(false);

    const toggleHamburger = () => {
        setHamburger(!hamburger);
    }

    return (
        <div className='lg:max-w-7xl md:max-w-3xl sm:max-w-sm mx-auto'>
            {/* pc nav start */}
            <div className={`fixed left-1/2 -translate-x-1/2 ${theme === 'light' ? 'bg-white' : 'bg-[#272929]'} lg:w-full z-[999] shadow-md lg:block hidden`}>
                <ul className='lg:max-w-7xl mx-auto flex justify-between py-12 items-center'>
                    <li><NavLink className={`${theme === 'light' ? 'text-black' : 'text-white'} font-bold text-2xl`}><span className={`text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Frontend Developer</span><br />Jiyeon's Portfolio</NavLink></li>
                    {
                        NavArray.map((e, i) => {
                            return (
                                <li key={i}><NavLink className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>{e}</NavLink></li>
                            );
                        })
                    }
                    <li><FontAwesomeIcon className={`cursor-pointer text-4xl ${theme === 'light' ? 'text-[#D83546]' : 'text-white'}`} onClick={() => dispatch(toggleTheme())} icon={theme === 'light' ? faToggleOff : faToggleOn} /></li>
                </ul>
            </div>
            {/* pc nav end */}

            {/* mobile nav start */}
            <ul className={`lg:hidden flex fixed z-[99] items-center justify-between px-[5%] ${theme === 'light' ? 'bg-white' : 'bg-[#272929]'} w-full h-20 shadow-md`}>
                <li><NavLink className={`${theme === 'light' ? 'text-black' : 'text-white'} font-bold text-lg`}><span className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Frontend Developer</span><br />Jiyeon's Portfolio</NavLink></li>
                <li className={`cursor-pointer ${theme === 'light' ? 'text-black' : 'text-white'}`} onClick={() => toggleHamburger()}>
                    {
                        hamburger ?
                        <FontAwesomeIcon icon={faXmark} className='w-8 h-8' /> : <FontAwesomeIcon icon={faBurger} className='w-8 h-8' />
                    }
                </li>
            </ul>
            <div className={`lg:hidden block fixed bg-[#D83546]/90 right-0 top-0 z-[59] p-20 pt-40 h-full duration-500 ${hamburger ? 'right-0' : '-right-72'}`}>
                <ul className='text-white'>
                    {
                        NavArray.map((e, i) => {
                            return (
                                <li key={i} className='pb-10 text-xl'><NavLink className='text-white'>{e}</NavLink></li>
                            )
                        })
                    }
                    <li><FontAwesomeIcon className={`cursor-pointer ${theme === 'light' ? 'text-black' : 'text-white'} text-3xl`} onClick={() => dispatch(toggleTheme())} icon={theme === 'light' ? faToggleOff : faToggleOn}/></li>
                </ul>
            </div>
            {/* mobile nav end */}
        </div>
    )
}

export default Nav