import React from 'react'
import { useSelector } from 'react-redux';

function Aboutme() {
    
    const theme = useSelector(state => state.dark);

    return (
        <>
        
        <div className='dark:bg-[#272929] bg-white pb-24 lg:pt-0 pt-20' id='aboutme'>
            <div className='lg:max-w-7xl mx-auto relative dark:text-white'>
                <div className='flex justify-center'>
                    <div className='text-center lg:tracking-[-0.5em] md:tracking-[-0.2em] tracking-tighter leading-none lg:my-24'>
                        <span className='lg:text-8xl md:text-5xl text-3xl relative z-20'>Developing </span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmall relative z-10 dark:hidden'>Frontend</span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmalldark relative z-10 hidden dark:inline-block'>Frontend</span>
                        <p className='lg:text-8xl md:text-5xl text-3xl relative z-10'><span className='playfair italic'>A</span>bout me</p>
                    </div>
                </div>
                <div className='lg:flex px-[2%]'>
                    <img src="./../../img/leejiyeonlong2.png" alt="pc" className='lg:block hidden lg:order-2 lg:max-w-full lg:h-full' />
                    <img src="./../../img/leejiyeon.png" alt="tablet" className='md:mx-auto md:my-10 md:block lg:hidden hidden' />
                    <img src="./../../img/leejiyeon2.png" alt="mobile" className='mx-auto my-10 block lg:hidden md:hidden w-64' />
                    <ul className={`lg:text-lg md:text-base text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} lg:tracking-tighter lg:order-1 lg:text-left
                    text-center md:pb-20 px-[2%] mr-5 leading-relaxed`}>
                        <li className={`font-bold lg:text-3xl text-xl relative after:w-4 after:h-1 after:bg-[#D83546] after:absolute after:left-0 after:-top-1 inline-block ${theme === 'light' ? 'text-black' : 'text-white'} pb-2`}>Profile</li>
                        <li><span className=''>이름</span> : 이지연</li>
                        <li>학력 : 건국대학교 컴퓨터공학과</li>
                        <li>E-mail : suhoprimavera@gmail.com</li>
                        <li>MBTI : ENFJ 정의로운 사회운동가</li>
                        <li><span className='font-bold'>#협업좋아요 </span><span className='font-bold'>#선도자 </span><span className='font-bold'>#MZ막차 </span><span className='font-bold'>#휘낭시에 </span><span className='font-bold'>#푸바오 </span></li><br /><br />
                        <li className={`font-bold lg:text-3xl text-xl relative after:w-4 after:h-1 after:bg-[#D83546] after:absolute after:left-0 after:-top-1 inline-block ${theme === 'light' ? 'text-black' : 'text-white'} pb-2`}>Developing Frontend</li>
                        <li>수학 문제 푸는 것을 좋아하고, 수학 문제를 풀듯이 복잡한 개발 문제를 해결하는 것을 좋아하며 디자인에 대한 열정은 제 작업에 창의성을 불어넣습니다.<br />이러한 다재다능함은 제 강점 중 하나입니다.</li><br /><br />
                        <li className={`font-bold lg:text-3xl text-xl relative after:w-4 after:h-1 after:bg-[#D83546] after:absolute after:left-0 after:-top-1 inline-block ${theme === 'light' ? 'text-black' : 'text-white'} pb-2`}>Experiences</li>
                        <li>활발하고 적극적인 행동력으로 새로운 기술을 배우고<br />이를 실제 프로젝트에 적용하여 결과를 만들어내는 것이 저의 목표입니다.</li><br />
                        <li>기술과 디자인, 그리고 창의성이 결합된 솔루션을 만들어내는 개발자가 되기 위해 항상 노력하고 있습니다.</li>
                    </ul>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Aboutme