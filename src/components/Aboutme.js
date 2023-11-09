import React from 'react'

function Aboutme() {
    return (
        <>
        <div className='dark:bg-[#272929]'>
            <div className='lg:max-w-7xl lg:h-screen mx-auto relative dark:text-white'>
                <div className='flex justify-center'>
                    <div className='text-center lg:tracking-[-0.5em] md:tracking-[-0.2em] tracking-tighter leading-none lg:my-24'>
                        <span className='lg:text-8xl md:text-5xl text-3xl'>Developing </span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmall relative'>Frontend</span>
                        <p className='lg:text-8xl md:text-5xl text-3xl'><span className='playfair italic'>A</span>bout me</p>
                    </div>
                </div>
                <div className='lg:flex px-[2%]'>
                    <img src="https://via.placeholder.com/500" alt="임시이미지" className='lg:block hidden lg:order-2 lg:max-w-full lg:h-full' />
                    <img src="https://via.placeholder.com/300" alt="임시이미지" className='md:mx-auto md:my-10 md:block lg:hidden hidden' />
                    <img src="https://via.placeholder.com/200" alt="임시이미지" className='mx-auto my-10 block lg:hidden md:hidden' />
                    <p className='lg:text-base lg:tracking-tighter lg:order-1 lg:text-left
                    text-center md:mb-20 px-[2%]'>
                        <span className='font-bold lg:text-xl relative after:w-4 after:h-1 after:bg-[#D83546] after:absolute after:left-0 after:-top-1'>Profile</span><br /><span className=''>이름</span> : 이지연 (Lee Jiyeon)<br />나이 : 1997.03.06<br />E-mail : suhoprimavera@gmail.com<br />MBTI : ENFJ 정의로운 사회운동가<br /><span className='hover:font-bold'>#협업좋아요 </span><span className='hover:font-bold'>#선도자 </span><span className='hover:font-bold'>#MZ막차</span><br /><br /><br />
                        <span className='font-bold lg:text-xl relative after:w-4 after:h-1 after:bg-[#D83546] after:absolute after:left-0 after:-top-1'>Developing Frontend</span> [프론트엔드 개발]<br />수학 문제 푸는 것을 좋아하고, 수학 문제를 풀듯이 복잡한 개발 문제를 해결하는 것을 좋아하며<br />디자인에 대한 열정은 제 작업에 창의성을 불어넣습니다.<br />이러한 다재다능함은 제 강점 중 하나입니다.<br /><br /><br />
                        <span className='font-bold lg:text-xl relative after:w-4 after:h-1 after:bg-[#D83546] after:absolute after:left-0 after:-top-1'>Experiences</span> [경험]<br />활발하고 적극적인 행동력으로 새로운 기술을 배우고<br />
                        이를 실제 프로젝트에 적용하여 결과를 만들어내는 것이 저의 목표입니다.<br /><br />
                        기술과 디자인, 그리고 창의성이 결합된 솔루션을 만들어내는 개발자가 되기 위해 항상 노력하고 있습니다.                      
                    </p>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Aboutme