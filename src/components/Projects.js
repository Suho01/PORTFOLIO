import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Projects() {

    const theme = useSelector(state => state.dark);

    const imgArray = [
        {
            "img" : "teampuri",
            "title" : "TEAM PROJECTS",
            "type" : "team",
            "use" : "·React　·TailwindCSS　·Firebase　·JavaScript　·Redux　·Node.js",
            "story" : "메인 페이지, 로그인 및 회원가입 기능 개발, 전체 디자인, 네이버 지도 API를 활용한 POI 탐색, 업종/기간/지역별 필터링 기능 구현, tailwindCSS 이용한 반응형 구현",
            "link" : "https://team-puri.vercel.app/"
        },
        {
            "img" : "festival",
            "title" : "PERSONAL PROJECTS",
            "type" : "personal",
            "use" : "·React　·Styled Components　·JavaScript　·API공공데이터",
            "story" : "filter함수를 이용해 각 구군마다 컨텐츠가 다르게 나타나는 기능 구현, 반응형 구현",
            "link" : "https://festival-mu.vercel.app/"
        },
        {
            "img" : "quiz",
            "title" : "PERSONAL PROJECTS",
            "type" : "personal",
            "use" : "·React　·TailwindCSS　·JavaScript",
            "story" : "랜덤함수로 문제 순서 및 문제 유형 구현, 오답노트 구현, tailwindCSS 이용한 반응형 구현",
            "link" : "https://quiz-rust-one.vercel.app/"
        },
        {
            "img" : "police",
            "title" : "WEB APP",
            "type" : "webapp",
            "use" : "·HTML　·SCSS　·JavaScript",
            "story" : "",
            "link" : "https://suho01.github.io/police/"
        },
        {
            "img" : "seoul",
            "title" : "WEB APP",
            "type" : "webapp",
            "use" : "·HTML　·SCSS　·JavaScript",
            "story" : "",
            "link" : "https://suho01.github.io/seoul/"
        },
        {
            "img" : "burgerking",
            "title" : "WEB APP",
            "type" : "webapp",
            "use" : "·HTML　·SCSS　·JavaScript",
            "story" : "",
            "link" : "https://suho01.github.io/burgerking/"
        },
        {
            "img" : "gongcha",
            "title" : "WEB APP",
            "type" : "webapp",
            "use" : "·HTML　·CSS　·JavaScript",
            "story" : "",
            "link" : "https://suho01.github.io/gongcha/"
        },
        {
            "img" : "subway",
            "title" : "WEB APP",
            "type" : "webapp",
            "use" : "·HTML　·CSS　·JavaScript",
            "story" : "",
            "link" : "https://suho01.github.io/subway/"
        }
    ];

    const [filter, setFilter] = useState('');
    const filterData = imgArray.filter((item) => {
        if (!filter) return true;
        return item.type === filter;
    });

    const [active, setActive] = useState('');
    const activeFilter = (filter) => {
        setActive(filter);
    }

    return (
        <>
        <div className='dark:bg-[#272929]'>
            <div className='lg:max-w-7xl mx-auto relative lg:pt-0 md:pt-0 pt-20'>
                <div className='flex justify-center dark:text-white'>
                    <div className='text-center lg:tracking-[-0.5em] md:tracking-[-0.2em] tracking-tighter leading-none lg:my-24'>
                        <span className='lg:text-8xl md:text-5xl text-3xl'>Developing </span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmall relative'>Frontend</span>
                        <p className='lg:text-8xl md:text-5xl text-3xl'><span className='playfair italic'>P</span>rojects</p>
                    </div>
                </div>
                <div className='lg:flex md:flex lg:justify-center md:justify-center gap-x-2 my-20 px-[2%]'>
                    <div className={`lg:text-2xl md:text-lg text-sm cursor-pointer p-3 font-bold bg-white text-[#D83546] border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white ${active === '' ? 'activeColor' : ''} lg:mb-0 md:mb-0 mb-2`} onClick={() => {setFilter(""); activeFilter("");}}>SHOW ALL</div>
                    <div className={`lg:text-2xl md:text-lg text-sm cursor-pointer p-3 font-bold bg-white text-[#D83546] border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white ${active === 'personal' ? 'activeColor' : ''} lg:mb-0 md:mb-0 mb-2`} onClick={() => {setFilter("personal"); activeFilter("personal");}}>PERSONAL PROJECTS</div>
                    <div className={`lg:text-2xl md:text-lg text-sm cursor-pointer p-3 font-bold bg-white text-[#D83546] border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white ${active === 'team' ? 'activeColor' : ''} lg:mb-0 md:mb-0 mb-2`} onClick={() => {setFilter("team"); activeFilter("team");}}>TEAM PROJECTS</div>
                    <div className={`lg:text-2xl md:text-lg text-sm cursor-pointer bg-white p-3 text-[#D83546] font-bold border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white ${active === 'webapp' ? 'activeColor' : ''}`} onClick={() => {setFilter("webapp"); activeFilter("webapp");}}>WEB APP</div>
                </div>
                <ul className='flex flex-wrap mx-auto lg:justify-start lg:gap-x-1 justify-between px-[2%] gap-y-2 pb-40'>
                    {
                        filterData.map((e, i) => {
                            return (
                                <>
                                    <li key={i} className='project relative lg:basis-[33%] md:basis-[49%] basis-full cursor-pointer group'>
                                        <a href={e.link} target='_blank'>
                                            <img className='w-full' src={`./../../img/${e.img}.png`} alt={i} />
                                            <p key={i} className='hidden group-hover:block group-hover:absolute group-hover:z-10 group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 lg:group-hover:text-xl group-hover:font-bold lg:basis-[33%] md:basis-[49%] basis-full cursor-pointer text-white text-center'>{e.title}<p className='text-xs'>{e.use}</p><p className='text-xs'>{e.story}</p></p>
                                        </a>
                                    </li>
                                </>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Projects