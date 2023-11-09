import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { toggleTheme } from '../store';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav() {
    const NavArray = ["<Work />", "<Projects />", "<Skills />", "<Contact />"];

    const theme = useSelector(state => state.dark);
    const dispatch = useDispatch();

    return (
        <div className='lg:max-w-7xl md:max-w-3xl sm:max-w-sm mx-auto'>
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
            <div className="lg:hidden hidden fixed bg-slate-500 right-0 top-0">
                <ul>
                    {
                        NavArray.map((e, i) => {
                            return (
                                <li key={i}><NavLink>{e}</NavLink></li>
                            )
                        })
                    }
                    <li><FontAwesomeIcon className={`cursor-pointer ${theme === 'light' ? 'text-black' : 'text-white'}`} onClick={() => dispatch(toggleTheme())} icon={theme === 'light' ? faToggleOff : faToggleOn}/></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav