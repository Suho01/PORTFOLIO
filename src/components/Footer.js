import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faComments, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
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
                <ul className='flex justify-around px-[2%]'>
                    <li><NavLink to='https://github.com/Suho01'><FontAwesomeIcon icon={faGithub} className='text-white hover:text-black duration-500 lg:text-9xl md:text-8xl text-7xl' /></NavLink></li>
                    <li><NavLink to='https://www.youtube.com/@suhochofree/featured'><FontAwesomeIcon icon={faYoutube} color='white' className='text-white hover:text-red-600 duration-500 lg:text-9xl md:text-8xl text-7xl' /></NavLink></li>
                    <li><NavLink to='https://open.kakao.com/me/o2asis'><FontAwesomeIcon icon={faComments} color='white' className='text-white hover:text-yellow-500 duration-500 lg:text-9xl md:text-8xl text-7xl' /></NavLink></li>
                    <li><NavLink to="mailto:suhoprimavera@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpen} color='white' className='text-white hover:text-slate-500 duration-500 lg:text-9xl md:text-8xl text-7xl' /></NavLink></li>
                </ul>
                <p className='text-lg text-white text-center py-20 tracking-tighter px-5'>Copyright 2023. 이지연 all rights reserved.<br /><br /><span className='lg:text-sm text-xs'>본 사이트는 상업적 목적이 아닌 이지연 개인 포트폴리오 사이트로 제작되었습니다.<br />일부 이미지 및 폰트 등은 그 출처가 따로 있음을 밝힙니다. <br /><br />해당 사이트는 1920*1080 해상도에 최적화 되었습니다.<br /><br />마지막 수정일 : 2023.11.09</span></p>
            </div>
        </div>
    )
}

export default Footer