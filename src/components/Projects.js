import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Projects() {

    const imgArray = [
        {
            "img" : "subway-react",
            "title" : "[NEW!] 리액트로 만든 써브웨이",
            "type" : "webapp",
            "use" : "·React　·TailwindCSS　·JavaScript",
            "date" : 3,
            "story" : "리액트로 만든 써브웨이 클론코딩, 반응형 구현",
            "link" : "https://suho01-subway.vercel.app/"
        },
        {
            "img" : "portfolio",
            "title" : "Developing Frontend Experiences",
            "type" : "personal",
            "use" : "·React　·TailwindCSS　·JavaScript",
            "date" : 30,
            "story" : "filter함수 사용, 다크모드, 반응형 구현 개인 포트폴리오",
            "link" : "https://suho01.vercel.app/"
        },
        {
            "img" : "benjamin",
            "title" : "벤자민 버튼의 시간은 거꾸로 간다",
            "type" : "personal",
            "use" : "·React　·TailwindCSS　·JavaScript",
            "date" : 1,
            "story" : "거꾸로 가는 시계",
            "link" : "https://benjamin-button.vercel.app/"
        },
        {
            "img" : "teampuri",
            "title" : "푸리푸리",
            "type" : "team",
            "use" : "·React　·TailwindCSS　·Firebase　·JavaScript　·Redux　·Node.js",
            "date" : 35,
            "story" : "메인 페이지, 로그인 및 회원가입 기능, 다크모드, 다국어, 반응형 구현",
            "contribution" : " (기여도 : 25%)",
            "link" : "https://team-puri.vercel.app/"
        },
        {
            "img" : "festival",
            "title" : "부산 국제 페스티벌",
            "type" : "personal",
            "use" : "·React　·Styled Components　·JavaScript　·API",
            "date" : 3,
            "story" : "filter함수를 이용해 각 구군마다 컨텐츠가 다르게 나타나는 기능 구현, 반응형 구현",
            "link" : "https://festival-mu.vercel.app/"
        },
        {
            "img" : "quiz",
            "title" : "Brain Storm : Quiz Edition",
            "type" : "personal",
            "use" : "·React　·TailwindCSS　·JavaScript",
            "date" : 3,
            "story" : "랜덤함수로 문제 순서 및 문제 유형 구현, 오답노트 구현, 반응형 구현",
            "link" : "https://quiz-rust-one.vercel.app/"
        },
        {
            "img" : "police",
            "title" : "경찰청",
            "type" : "webapp",
            "use" : "·HTML　·SCSS　·JavaScript",
            "date" : 3,
            "story" : "클론코딩",
            "link" : "https://suho01.github.io/police/"
        },
        {
            "img" : "seoul",
            "title" : "서울특별시 교육감 조희연",
            "type" : "webapp",
            "use" : "·HTML　·SCSS　·JavaScript",
            "date" : 1,
            "story" : "리디자인",
            "link" : "https://suho01.github.io/seoul/"
        },
        {
            "img" : "burgerking",
            "title" : "버거킹",
            "type" : "webapp",
            "use" : "·HTML　·SCSS　·JavaScript",
            "date" : 5,
            "story" : "리디자인",
            "link" : "https://suho01.github.io/burgerking/"
        },
        {
            "img" : "gongcha",
            "title" : "공차",
            "type" : "webapp",
            "use" : "·HTML　·CSS　·JavaScript",
            "date" : 6,
            "story" : "클론코딩",
            "link" : "https://suho01.github.io/gongcha/"
        },
        {
            "img" : "subway",
            "title" : "써브웨이",
            "type" : "webapp",
            "use" : "·HTML　·CSS　·JavaScript",
            "date" : 12,
            "story" : "클론코딩",
            "link" : "https://suho01.github.io/subway/"
        },
        {
            "img" : "tae",
            "title" : "태성김치",
            "type" : "team",
            "use" : "·HTML　·CSS　·JavaScript",
            "date" : 28,
            "story" : "디자인 및 모바일 적응형 제작",
            "contribution" : " (기여도 : 20%)",
            "link" : "http://www.tskimchi.com/sub/index.php"
        },
        {
            "img" : "kilf",
            "title" : "한국지방세연구원",
            "type" : "team",
            "use" : "·HTML　·CSS　·JavaScript",
            "date" : 28,
            "story" : "디자인 및 모바일 반응형 제작",
            "contribution" : " (기여도 : 20%)",
            "link" : "https://www.kilf.re.kr/"
        },
        {
            "img" : "korean",
            "title" : "한국문학번역원",
            "type" : "team",
            "use" : "·HTML　·CSS　·JavaScript",
            "date" : 62,
            "story" : "디자인 및 모바일 적응형 제작",
            "contribution" : " (기여도 : 20%)",
            "link" : "https://ltikorea.or.kr/"
        },
        {
            "img" : "kukeeper",
            "title" : "Ku : Keeper",
            "type" : "team",
            "use" : "·Arduino　·MySQL　·Apache　·PHP　·C++",
            "date" : 146,
            "contribution" : " (기여도 : 45%)",
            "story" : "아두이노 모듈로 만드는 도어락 졸업작품, 관리 기능은 웹 페이지 및 서버를 통해 구현",
            "link" : ""
        },
        {
            "img" : "kumeal",
            "title" : "Starlight",
            "type" : "personal",
            "use" : "·Swift",
            "date" : 7,
            "story" : "Swift로 만드는 리뷰 애플리케이션",
            "link" : ""
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
    };

    const [isModal, setIsModal] = useState(false);
    const theme = useSelector(state => state.dark);

    return (
        <>
        <div className='dark:bg-[#272929] bg-white' id='projects'>
            <div className='lg:max-w-7xl mx-auto relative lg:pt-0 md:pt-0 pt-20'>
                <div className='flex justify-center dark:text-white'>
                    <div className='text-center lg:tracking-[-0.5em] md:tracking-[-0.2em] tracking-tighter leading-none lg:my-24'>
                        <span className='lg:text-8xl md:text-5xl text-3xl relative z-20'>Developing </span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmall relative z-10 dark:hidden'>Frontend</span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmalldark relative z-10 hidden dark:inline-block'>Frontend</span>
                        <p className='lg:text-8xl md:text-5xl text-3xl relative z-10'><span className='playfair italic'>P</span>rojects</p>
                    </div>
                </div>
                <div className='lg:flex md:flex lg:justify-center md:justify-center gap-x-2 my-20 px-[2%]'>
                    <div className={`lg:text-2xl md:text-lg text-sm cursor-pointer p-3 font-bold bg-white text-[#D83546] border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white ${active === '' ? 'activeColor' : ''} lg:mb-0 md:mb-0 mb-2`} onClick={() => {setFilter(""); activeFilter("");}}>SHOW ALL (16)</div>
                    <div className={`lg:text-2xl md:text-lg text-sm cursor-pointer p-3 font-bold bg-white text-[#D83546] border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white ${active === 'personal' ? 'activeColor' : ''} lg:mb-0 md:mb-0 mb-2`} onClick={() => {setFilter("personal"); activeFilter("personal");}}>PERSONAL (5)</div>
                    <div className={`lg:text-2xl md:text-lg text-sm cursor-pointer p-3 font-bold bg-white text-[#D83546] border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white ${active === 'team' ? 'activeColor' : ''} lg:mb-0 md:mb-0 mb-2`} onClick={() => {setFilter("team"); activeFilter("team");}}>TEAM (5)</div>
                    <div className={`lg:text-2xl md:text-lg text-sm cursor-pointer bg-white p-3 text-[#D83546] font-bold border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white ${active === 'webapp' ? 'activeColor' : ''}`} onClick={() => {setFilter("webapp"); activeFilter("webapp");}}>WEB APP (6)</div>
                </div>
                <ul className='flex flex-wrap mx-auto lg:justify-start lg:gap-x-5 justify-between px-[2%] gap-y-5 pb-40'>
                    {
                        filterData.map((e, i) => {
                            return (
                                <>
                                    <li key={i} className={`relative lg:basis-[32%] md:basis-[49%] basis-full cursor-pointer border shadow-md bg-white`} onClick={() => setIsModal(true)}>
                                        <a href={e.link} target='_blank'>
                                            <img className='w-full' src={`./../../img/${e.img}.png`} alt={i} />
                                            <ul className='p-5'>
                                                <li key={i} className='pb-2 text-xl lg:basis-[33%] md:basis-[49%] basis-full cursor-pointer font-semibold'>{e.title}<span className='text-base font-normal text-black'>{e.contribution}</span></li>
                                                <li className='pb-2 text-sm text-[#D83546] font-bold'>{e.use}</li>
                                                <li className='pb-2 text-sm text-[#D83546]'>소요기간 : {e.date}일</li>
                                                <li className='text-base'>{e.story}</li>
                                            </ul>
                                            
                                        </a>
                                    </li>
                                </>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
        {/* {
            isModal && <Modal closeModal={setIsModal} />
        } */}
        </>
    )
}

function Modal(props) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    return (
        <>
            <div className='fixed w-full h-full bg-black/50 left-0 top-0 z-50' onClick={() => {props.closeModal(false)}}>
                <div className="bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2">
                    <p className='p-5'>test</p>
                    <button className="absolute top-5 right-5 text-xl" onClick={() => {props.closeModal(false)}}>❌</button>
                </div>
            </div>
        </>
    )
}

export default Projects