import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
import js from '../assets/logos/js.webp'
import react from '../assets/logos/react.webp'
import node from '../assets/logos/node.png'
import express from '../assets/logos/express.png'
import mongo from '../assets/logos/mongo.png'
import wind from '../assets/logos/TailwindCSS.webp'
import c from '../assets/logos/c.webp'
import cpp from '../assets/logos/c++.webp'

const Skills = () => {

  const { fontColor, cardColor, sColor } = useContext(ThemeContext);

  return (
    <section className='text-white mt-5 md:mt-8 p-8 rounded-lg' style={{backgroundColor: cardColor}}>
        <div className='inline-block'>
            <div className='flex items-center gap-2 border border-gray-800 px-4 py-[6px] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" style={{color: sColor}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <span style={{color:fontColor}}>Skills</span>
            </div>
        </div>
        <div className='pt-8 w-full'>
          
          <div className='mb-5'>
              <p className='text-4xl 2xl:text-5xl text-left font-semibold'><span>My</span> <span className='bg-gradient-to-r from-violet-600 to-indigo-600 px-2 pb-1 rounded-sm'>Skills</span></p>
          </div>
          
          <div className='mb-14'>
            <p className='' style={{color: fontColor}}>A dedicated professional with strong technical skills and effective communication, consistently driving project success. Adept at problem-solving and collaboration, ensuring smooth project execution. Passionate about delivering high-quality results and continuous improvement.</p>
          </div>
          
          <div className='mb-5'>
            <div className='flex flex-wrap items-end justify-center gap-12'>
              
              <div className='flex flex-col items-center gap-5 text-xs 2xl:text-sm'>
                <img className='size-14 2xl:size-16 grayscale hover:grayscale-0' src={js} alt="" />
                <p>JavaScript</p>
              </div>

              <div className='flex flex-col items-center gap-5 text-xs 2xl:text-sm font-medium'>
                <img className='size-14 2xl:size-16 grayscale hover:grayscale-0' src={react} alt="" />
                <p>React Js</p>
              </div>

              <div className='flex flex-col items-center gap-5 text-xs 2xl:text-sm font-medium'>
                <img className='size-14 2xl:size-16 grayscale hover:grayscale-0' src={node} alt="" />
                <p>Node Js</p>
              </div>

              <div className='flex flex-col items-center gap-5 text-xs 2xl:text-sm font-medium'>
                <img className='size-14 2xl:size-16 grayscale hover:grayscale-0' src={express} alt="" />
                <p>Express Js</p>
              </div>

              <div className='flex flex-col items-center gap-5 text-xs 2xl:text-sm font-medium'>
                <img className='size-14 2xl:size-16 grayscale hover:grayscale-0' src={mongo} alt="" />
                <p>MongoDB</p>
              </div>

              <div className='flex flex-col items-center gap-6 text-xs 2xl:text-sm font-medium'>
                <img className='w-14 2xl:w-16 grayscale hover:grayscale-0' src={wind} alt="" />
                <p>Tailwind CSS</p>
              </div>

              <div className='flex flex-col items-center gap-5 text-xs 2xl:text-sm font-medium'>
                <img className='w-14 2xl:w-16 grayscale hover:grayscale-0' src={c} alt="" />
                <p>C Programming</p>
              </div>

              <div className='flex flex-col items-center gap-5 text-xs 2xl:text-sm font-medium'>
                <img className='w-14 2xl:w-16 grayscale hover:grayscale-0' src={cpp} alt="" />
                <p>C++</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills