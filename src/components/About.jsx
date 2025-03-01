import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
import cuet from '../assets/cuet-pic.webp'

const About = () => {

    const { bFontColor ,fontColor ,cardColor, sColor } = useContext(ThemeContext);

  return (
    <section id='about' className='text-white mt-8 p-8 rounded-lg' style={{backgroundColor: cardColor}}>
        <div className='inline-block'>
            <div className='flex items-center gap-2 border border-gray-800 px-4 py-[6px] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" style={{color: sColor}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span style={{color:fontColor}}>About</span>
            </div>
        </div>
        <div className='pt-8 w-full flex flex-col sm:flex-row gap-8'>
            {/* left */}
            <div className='w-full sm:w-[35%] flex justify-start items-center'>
                <img className='w-full rounded-lg border-2 border-[#858585] grayscale duration-150 ease-in-out hover:grayscale-0' src={cuet} alt="" />
            </div>
            {/* right */}
            <div className='w-full sm:w-[65%]'>
                <div className='mb-5'>
                    <p className='text-4xl text-right'><span className='font-light'>About</span> <span className='font-semibold' style={{color: sColor}}>Me</span></p>
                </div>
                <div className='mb-5'>
                    <p className='text-xs text-justify' style={{color: fontColor}}>I am a dedicated Computer Science student with a strong foundation in web development and competitive programming. I participated in <span className='font-medium' style={{color: bFontColor}}>ICPC Dhaka Regional 2023</span> and <span className='font-medium' style={{color: bFontColor}}>CUET Code Storm 1.0</span>, showcasing my problem-solving skills.
                        Proficient in <span className='font-medium' style={{color: bFontColor}}>React Js, Node Js, Express Js, and mongoDB</span>, I earned certifications from <span className='font-medium' style={{color: bFontColor}}>FreeCodeCamp, Udemy</span> and <span className='font-medium' style={{color: bFontColor}}>Codedamn</span>. I also have professional experience as an Assistant Senior Executive at Admission Assistant, enhancing my organizational and communication skills.
                        Passionate about learning and staying updated with the latest web technologies, I am actively seeking an internship or entry-level web developer role to grow and contribute.</p>
                </div>
                <div className='mb-5 flex gap-5'>
                    <div className='text-xs border border-dashed px-5 py-[6px] rounded-full' style={{color: fontColor}}>MERN Stack</div>
                    <div className='text-xs border border-dashed px-5 py-[6px] rounded-full' style={{color: fontColor}}>Problem Solving</div>
                </div>
                <div>
                    <div>
                        <div>

                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About