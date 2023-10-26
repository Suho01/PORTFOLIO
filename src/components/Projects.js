import React from 'react'
import { useSelector } from 'react-redux';

function Projects() {

    const theme = useSelector(state => state.dark);

    const imgArray = [
        "teampuri", "police", "seoul", "burgerking", "gongcha", "subway", "임시이미지1", "임시이미지2", "임시이미지3"
    ];

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
                <div className='flex justify-center gap-x-2 my-20'>
                    <div className='lg:text-2xl md:text-lg text-sm cursor-pointer bg-[#D83546] p-3 text-white font-bold'>SHOW ALL</div>
                    <div className='lg:text-2xl md:text-lg text-sm cursor-pointer bg-white p-3 text-[#D83546] font-bold border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white'>TEAM PROJECTS</div>
                    <div className='lg:text-2xl md:text-lg text-sm cursor-pointer bg-white p-3 text-[#D83546] font-bold border-[#D83546] border-2 duration-500 hover:bg-[#D83546] hover:text-white'>CLONE CODINGS</div>
                </div>
                <ul className='flex flex-wrap mx-auto justify-between px-[2%] gap-y-2 pb-40'>
                    {
                        imgArray.map((e, i) => {
                            return (
                                <>
                                    <li key={i} className='project relative lg:basis-[33%] md:basis-[49%] basis-full cursor-pointer'>
                                        <img className='w-full' src={i < 6 ? `./../../img/${e}.png` : `./../../img/${e}.jpg`} alt={i} />
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Projects