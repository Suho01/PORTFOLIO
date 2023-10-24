import React from 'react'

function Aboutme() {
    return (
        <>
            <div className='lg:max-w-7xl lg:h-screen mx-auto relative'>
                <div className='flex justify-center'>
                    <div className='text-center lg:tracking-[-0.5em] md:tracking-[-0.2em] tracking-tighter leading-none lg:my-24'>
                        <span className='lg:text-8xl md:text-5xl text-3xl'>Developing </span>
                        <span className='lg:text-8xl md:text-5xl text-3xl font-bold frontbacksmall relative'>Frontend</span>
                        <p className='lg:text-8xl md:text-5xl text-3xl'><span className='playfair italic'>A</span>bout me</p>
                    </div>
                </div>
                <div className='lg:flex'>
                    <img src="https://via.placeholder.com/500" alt="임시이미지" className='lg:block hidden lg:order-2' />
                    <img src="https://via.placeholder.com/300" alt="임시이미지" className='md:mx-auto md:my-10 md:block lg:hidden hidden' />
                    <img src="https://via.placeholder.com/200" alt="임시이미지" className='mx-auto my-10 block lg:hidden md:hidden' />
                    <p className='lg:text-base lg:tracking-tighter lg:order-1 lg:text-left
                    text-center md:mb-20 px-[2%]'>
                        <span className='font-bold lg:text-xl'>안녕하세요, 끊임없이 배우고 성장하는 이지연입니다.</span><br /><br />
                        수학 문제 푸는 것을 좋아하고 수학 문제를 풀듯이 복잡한 개발 문제를 해결하는 것을 좋아하며,<br />
                        디자인에 대한 열정은 제 작업에 창의성을 불어넣습니다.<br />
                        이러한 다재다능함은 제 강점 중 하나입니다. <br /><br />
                        활발하고 적극적인 행동력으로 새로운 기술을 배우고<br />
                        이를 실제 프로젝트에 적용하여 결과를 만들어내는 것이 저의 목표입니다.<br /><br />
                        기술과 디자인, 그리고 창의성이 결합된 솔루션을 만들어내는 개발자가 되기 위해 항상 노력하고 있습니다. <br /><br />
                        GTQ(그래픽기술자격) 1급 
                        2011.02
                        한국생산성본부
                        <br /><br />
                        GTQ(그래픽기술자격) 2급
                        2011.02
                        한국생산성본부
                        <br /><br />
                        정보기술자격(ITQ) 아래한글 B등급
                        2008.07
                        한국생산성본부                        
                    </p>                    
                </div>
            </div>
        </>
    )
}

export default Aboutme