import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className='lg:w-[1200px] md:w-[768px] w-[480px] mx-auto'>
            <div className='lg:flex lg:justify-center lg:pt-12'>
                <ul className=' lg:flex lg:justify-between lg:basis-1/3'>
                    <li><NavLink>&#60;Work &#47;&#62;</NavLink></li>
                    <li><NavLink>&#60;Projects &#47;&#62;</NavLink></li>
                    <li><NavLink>&#60;Skills &#47;&#62;</NavLink></li>
                    <li><NavLink>&#60;Contact &#47;&#62;</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav