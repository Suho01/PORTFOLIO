import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function GoTop() {
    const goTop = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        });
    };

    return (
        <div className='fixed bottom-[5%] right-[5%] cursor-pointer lg:py-4 lg:px-6 py-3 px-5 bg-[#D83546] rounded-full text-white font-bold text-center z-[49] hover:bg-[#D83546]/70 duration-500' onClick={() => goTop()}><FontAwesomeIcon icon={faAngleUp} className='lg:text-2xl text-lg' /><br />TOP</div>
    )
}

export default GoTop