import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faComments, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {

    const icon = [
        {
            "name" : faGithub,
            "link" : "https://github.com/Suho01",
            "color" : "hover:text-black"
        },
        {
            "name" : faYoutube,
            "link" : "https://www.youtube.com/@suhochofree/featured",
            "color" : "hover:text-red-600"
        },
        {
            "name" : faComments,
            "link" : "https://open.kakao.com/me/o2asis",
            "color" : "hover:text-yellow-500"
        },
        {
            "name" : faEnvelopeOpen,
            "link" : "mailto:suhoprimavera@gmail.com",
            "color" : "hover:text-slate-500"
        },
    ];

    return (
        <div className='bg-[#92313b] w-full text-white pt-20' id='footer'>
            <div className='text-center lg:tracking-[-0.2em] tracking-tighter leading-none mb-10'>
            <span className='lg:text-5xl text-3xl'>Developing </span>
            <span className='lg:text-5xl text-3xl font-bold relative'>Frontend</span>
            <p className='lg:text-5xl text-3xl'><span className='playfair italic'>C</span>onnect Me</p>
        </div>
            <div className='lg:max-w-7xl mx-auto'>
                <ul className='flex justify-around px-[2%] lg:px-[30%] md:px-[20%]'>
                    {
                        icon.map((e, i) => {
                            return (
                                <li key={i}><NavLink to={e.link}><FontAwesomeIcon icon={e.name} className={`text-white ${e.color} duration-500 lg:text-7xl md:text-6xl text-5xl`} /></NavLink></li>
                            )
                        })
                    }
                </ul>
                <ul className='text-lg text-white text-center py-10 tracking-tighter px-5'>
                    <li className='pb-2'>Copyright 2023. 이지연 all rights reserved.</li>
                    <li className='lg:text-sm text-xs pt-3 pb-1'>본 사이트는 상업적 목적이 아닌 이지연 개인 포트폴리오 사이트로 제작되었습니다.</li>
                    <li className='lg:text-sm text-xs pb-3'>일부 이미지 및 폰트 등은 그 출처가 따로 있음을 밝힙니다.</li>
                    <li className='lg:text-sm text-xs py-3'>해당 사이트는 1920*1080 해상도에 최적화 되었습니다.</li>
                    <li className='lg:text-sm text-xs pt-3'>마지막 수정일 : 2023.12.06</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer