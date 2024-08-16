import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import projectsData from './../projects.json';

function Projects() {
    const projectsArray = ["SHOW ALL", "PERSONAL", "TEAM", "WEB APP", "WORK"];
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('');
    const [active, setActive] = useState('SHOW ALL');

    useEffect(() => {
        setProjects(projectsData);
    }, []);


    const filterData = (projects || []).filter((item) => {
        if (!filter || filter === "SHOW ALL") return true;
        return item.type.toLowerCase() === filter.toLowerCase();
    });

    const handleFilterClick = (filterType) => {
        setFilter(filterType === "SHOW ALL" ? "" : filterType);
        setActive(filterType);
    }

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
                    {
                        projectsArray.map((e, i) => {
                            const count = e === "SHOW ALL" ? projects.length : projects.filter(p => p.type.toLowerCase() === e.toLowerCase()).length;
                            
                            return (
                                <div key={i} className={`lg:text-2xl md:text-lg text-sm cursor-pointer p-3 font-bold bg-white text-[#D83546] border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white ${active === e ? 'activeColor' : ''} lg:mb-0 md:mb-0 mb-2`} onClick={() => handleFilterClick(e)}>{e} ({count})</div>
                            );
                        })
                    }
                
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
        {
            // isModal && <Modal closeModal={setIsModal} />
        }
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