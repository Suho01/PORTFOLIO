import React from 'react'

function Skills() {
    return (
        <>
        <div className='dark:bg-[#272929]'>
            <div className='lg:max-w-7xl lg:h-screen mx-auto relative lg:pt-0 md:pt-0 pt-20 dark:text-white'>
                <div className='flex justify-center'>
                    <div className='text-center lg:tracking-[-0.5em] md:tracking-[-0.2em] tracking-tighter leading-none lg:my-24'>
                        <span className='lg:text-8xl md:text-5xl text-3xl'>Developing </span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmall relative'>Frontend</span>
                        <p className='lg:text-8xl md:text-5xl text-3xl'><span className='playfair italic'>S</span>kills</p>
                    </div>
                </div>
                <div className='flex lg:justify-between items-center'>
                    <ul className='lg:basis-1/4 font-bold lg:text-2xl lg:leading-loose'>
                        <li>Language</li>
                        <li>Framework / Library</li>
                        <li>MarkUp</li>
                        <li>Database</li>
                        <li>Tool</li>
                    </ul>
                    <ul className='lg:basis-3/4 lg:text-lg lg:leading-loose'>
                        <li className='flex'>
                            <p>Javascript</p>
                            <p>Typescript</p>
                            <p>NextJS</p>
                        </li>
                        <li className='flex'>
                            <p>React</p>
                            <p>NodeJS</p>
                        </li>
                        <li className='flex'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>SCSS</p>
                            <p>TailwindCSS</p>
                            <p>Styled Components</p>
                        </li>
                        <li className='flex'>
                            <p>MongoDB</p>
                            <p>MySql</p>
                        </li>
                        <li className='flex'>
                            <p>Git</p>
                            <p>Github</p>
                            <p>Figma</p>
                            <p>Photoshop</p>
                            <p>Illustrator</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills