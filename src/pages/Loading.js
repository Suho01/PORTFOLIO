import React from 'react'

function Loading() {
    return (
        <>
        <div className='dark:bg-[#272929] bg-white'>            
            <div className='lg:max-w-7xl h-screen md:max-w-3xl sm:max-w-sm
            flex mx-auto justify-center items-center lg:pt-20'>
                <div className='lg:tracking-[-1em] md:tracking-[-0.5em] tracking-[-0.2em] text-center leading-none dark:text-white loadingtest'>
                    <p className='lg:text-[150px] md:text-8xl text-6xl relative z-20'>Developing</p>
                    <p className='lg:text-[150px] md:text-8xl text-6xl font-bold frontback z-10 relative dark:hidden dark:frontbackdark'>Frontend</p>                    
                    <p className='lg:text-[150px] md:text-8xl text-6xl font-bold frontbackdark z-10 relative hidden dark:block'>Frontend</p>                    
                    <p className='lg:text-[150px] md:text-8xl text-6xl relative z-10'><span className='playfair italic'>E</span>xperiences</p>
                    <p className='lg:text-xl tracking-normal pt-10'>&copy; LeeJiyeon</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Loading