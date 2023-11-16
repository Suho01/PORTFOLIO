import React from 'react'
import {  useSelector } from 'react-redux';

function Skills() {

    const SkillArray = [
        {
            "title" : "Language",
            "desc" : {
                "./../../img/js.png" : "JavaScript : 함수를 선언해서 자유롭게 사용할 줄 압니다.",
                "TypeScript" : "타입을 선언할 줄 압니다."
            }
        },
        {
            "title" : "Framework / Library",
            "desc" : {
                "React" : "라이브러리를 설치하고 상태 관리 및 redux 활용 가능합니다.",
                "NodeJS" : "데이터베이스 연동 가능합니다.",
                "NextJS" : "사용해봤습니다."
            }
        },
        {
            "title" : "MarkUp / Design",
            "desc" : {
                "HTML" : "시맨틱 마크업과 브라우저 렌더링 프로세스에 대해서 잘 알고 있습니다.",
                "CSS" : "원하는 기능을 자유롭게 구현할 수 있습니다.",
                "TailwindCSS" : "다크모드, 다국어, 모바일 반응형 구현이 가능합니다.",
                "Styled Components" : "props를 활용한 다크모드 구현이 가능합니다."
            }   
        },
        {
            "title" : "Database",
            "desc" : {
                "MongoDB" : "데이터 연동이 가능합니다.",
                "Firebase" : "사용해봤습니다.",
                "MySQL" : "테이블을 만들고 수정, 삭제를 자유롭게 할 줄 압니다.",
                "MariaDB" : "MySQL로 연동해서 사용해봤습니다."
            }
        },
        {
            "title" : "Tool",
            "desc" : {
                "Git" : "깃을 통해 원활한 협업을 할 줄 압니다.",
                "Github" : "원하는 시점으로 복원 가능하며 여러 사람이 하나의 소스를 작업해도 충돌을 방지할 수 있습니다.",
                "Figma" : "피그마로 레이아웃 구상을 할 수 있습니다.",
                "Adobe Photoshop" : "이미지/사진 편집, 로고/배너 만들기, 움직이는 이미지를 만들 수 있습니다.",
                "Adobe Illustrator" : "벡터 이미지, 3d이미지를 만들 수 있습니다."
            }
        }
    ]

    const theme = useSelector(state => state.dark);

    return (
        <>
        <div className='dark:bg-[#272929] bg-white' id='skills'>
            <div className='lg:max-w-7xl mx-auto relative lg:pt-0 md:pt-0 pt-20 dark:text-white pb-20'>
                <div className='flex justify-center'>
                    <div className='text-center lg:tracking-[-0.5em] md:tracking-[-0.2em] tracking-tighter leading-none lg:my-24 mb-20'>
                        <span className='lg:text-8xl md:text-5xl text-3xl relative z-20'>Developing </span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmall relative z-10 dark:hidden'>Frontend</span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmalldark relative z-10 hidden dark:inline-block'>Frontend</span>
                        <p className='lg:text-8xl md:text-5xl text-3xl relative z-10'><span className='playfair italic'>S</span>kills</p>
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
                                    <li><img src='./../../public/img/js.png' /></li>
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