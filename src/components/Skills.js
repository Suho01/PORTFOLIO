import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Skills() {

    const SkillArray = [
        {
            "title" : "LanguageArray",
            "desc" : {
                "Javascript" : "함수를 사용할 줄 압니다.",
                "Typescript" : "타입을 선언할 줄 압니다.",
                "NextJS" : "사용해봤습니다."
            }
        },
        {
            "title" : "Framework / Library",
            "desc" : {
                "React" : "상태 관리 및 redux 활용 가능",
                "NodeJS" : "데이터베이스 연동 가능"
            }
        },
        {
            "title" : "MarkUp",
            "desc" : {
                "HTML" : "시맨틱 마크업과 브라우저 렌더링 프로세스에 대해서 잘 알고 있습니다.",
                "CSS" : "완존 잘해요",
                "SCSS" : "완벽하게 쓸 줄 알아요 제 별명이 scss성애자",
                "TailwindCSS" : "다크모드, 다국어, 모바일 반응형 구현 삽가능",
                "Styled Components" : "아 쌉 가능"
            }   
        },
        {
            "title" : "Database",
            "desc" : {
                "MongoDB" : "몽골에서 온 몽고디비인가?",
                "MySql" : "학교에서 배웟는데 테이블 잘 만듦"
            }
        },
        {
            "title" : "Tool",
            "desc" : {
                "Git" : "이거 못하면 개발자 아님..",
                "Github" : "이거 모르면 취업 못 함..",
                "Figma" : "피그마 선생님 조아요",
                "Adobe Photoshop" : "디자인 마스터",
                "Adobe Illustrator" : "10세에 GTQ 마스터 하다 . . ."
            }
        }
    ]

    const theme = useSelector(state => state.dark);

    return (
        <>
        <div className='dark:bg-[#272929]'>
            <div className='lg:max-w-7xl mx-auto relative lg:pt-0 md:pt-0 pt-20 dark:text-white pb-20'>
                <div className='flex justify-center'>
                    <div className='text-center lg:tracking-[-0.5em] md:tracking-[-0.2em] tracking-tighter leading-none lg:my-24 mb-20'>
                        <span className='lg:text-8xl md:text-5xl text-3xl'>Developing </span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmall relative'>Frontend</span>
                        <p className='lg:text-8xl md:text-5xl text-3xl'><span className='playfair italic'>S</span>kills</p>
                    </div>
                </div>
                <div className='flex lg:justify-between items-center'>
                    <ul className='font-bold lg:text-2xl md:text-xl text-lg lg:leading-loose px-[2%]'>
                        {
                            SkillArray.map((e, i) => {
                                return (
                                    <>                                    
                                    <li key={i}>{e.title}</li>
                                    <li className='lg:text-xl lg:leading-loose font-normal flex pb-5 md:text-lg text-base flex-wrap'>
                                        {
                                            Object.entries(e.desc).map(([key, value], index) => {
                                                return (
                                                    <li key={index} className={`pr-10 group text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                                                        <span title='value' className='cursor-pointer'>{key}</span>
                                                        <span className='hidden group-hover:block absolute bg-[#ec4f5f] text-white'>{value}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills