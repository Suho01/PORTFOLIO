import { faAngleUp, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function GoTop() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect (() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const goTop = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        });
    };
    const theme = useSelector(state => state.dark);
    return (
        <>
            <div className={`go-top-button ${isVisible ? 'show' : ''}`}>
                <div className='fixed bottom-[5%] right-[5%] cursor-pointer lg:w-20 lg:h-20 md:w-20 md:h-20 w-16 h-16 bg-[#D83546] rounded-full text-white font-bold z-[49] hover:bg-[#D83546]/70 duration-500 flex-col items-center text-center' onClick={() => goTop()}><FontAwesomeIcon icon={faAngleUp} className='lg:text-2xl text-lg mt-2' /><p>TOP</p></div>
                <NavLink to='https://open.kakao.com/me/o2asis' target='_blank'><div className={`fixed bottom-[17%] right-[5%] cursor-pointer lg:w-20 lg:h-20 md:w-20 md:h-20 w-16 h-16 rounded-full font-bold z-[49] duration-500 lg:text-3xl text-2xl ${theme === 'light' ? 'bg-black text-white hover:bg-yellow-500 hover:text-black' : 'bg-yellow-500 text-black hover:bg-black hover:text-white'} flex items-center justify-center`}><FontAwesomeIcon icon={faComments} /></div></NavLink>
            </div>
        </>
    )
}

export default GoTop