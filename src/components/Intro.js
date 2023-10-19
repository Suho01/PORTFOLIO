import React from 'react'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Intro() {
    return (
        <>
            <div className='text-center'>
                <div><p className='text-[200px] font-bold'>DEVELOPER</p></div>
                <div><p className='text-[200px] font-bold bg-black text-white'>LEEJIYEON</p></div>
                <FontAwesomeIcon icon={faAngleDown} className='text-9xl' />
            </div>
        </>
    )
}

export default Intro