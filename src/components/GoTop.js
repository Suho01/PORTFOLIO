import { faAngleUp, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom';

function GoTop() {
    const goTop = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        });
    };

    return (
        <>
            <div className='fixed bottom-[5%] right-[5%] cursor-pointer lg:w-20 lg:h-20 md:w-20 md:h-20 w-16 h-16 bg-[#D83546] rounded-full text-white font-bold z-[49] hover:bg-[#D83546]/70 duration-500 flex-col items-center text-center' onClick={() => goTop()}><FontAwesomeIcon icon={faAngleUp} className='lg:text-2xl text-lg mt-2' /><p>TOP</p></div>
            <NavLink to='https://open.kakao.com/me/o2asis'><div className='fixed bottom-[17%] right-[5%] cursor-pointer lg:w-20 lg:h-20 md:w-20 md:h-20 w-16 h-16 bg-black rounded-full text-white font-bold z-[49] duration-500 lg:text-3xl text-2xl hover:bg-yellow-500 hover:text-black flex items-center justify-center'><FontAwesomeIcon icon={faComments} /></div></NavLink>
        </>
    )
}

export default GoTop