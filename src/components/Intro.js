import React from 'react'

function Intro() {
    return (
        <>
            <div className='lg:max-w-7xl h-screen md:max-w-3xl sm:max-w-sm
            flex mx-auto justify-center items-center'>
                <div className='lg:tracking-[-1em] md:tracking-[-0.5em] tracking-[-0.2em] text-center leading-none'>
                    <p className='lg:text-[180px] md:text-8xl text-6xl'>Developing</p>
                    <p className='lg:text-[180px] md:text-8xl text-6xl font-bold frontback relative'>Frontend</p>                    
                    <p className='lg:text-[180px] md:text-8xl text-6xl'><span className='playfair italic'>E</span>xperiences</p>
                    <p className='lg:text-xl tracking-normal pt-10'>&copy; LeeJiyeon</p>
                </div>
            </div>
        </>
    )
}

export default Intro