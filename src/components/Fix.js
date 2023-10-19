import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Fix() {
    return (
        <div className='lg:fixed lg:bottom-32 lg:right-32 lg:w-10 lg:h-10 bg-black rounded-full cursor-pointer'>
            <div className='lg:relative'>
                <FontAwesomeIcon icon={faAngleUp} className='text-white lg:absolute lg:top-1/2 lg:left-1/2 -translate-x-1/2 translate-y-1/2' />
            </div>
        </div>
    )
}

export default Fix