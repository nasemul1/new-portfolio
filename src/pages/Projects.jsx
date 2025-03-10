import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
import ecom from '../assets/works/ecom.webp'
import job from '../assets/works/job.webp'
import trip from '../assets/works/trip.webp'
import team from '../assets/works/team.webp'

import react from '../assets/logos/react.webp'
import vue from '../assets/logos/vue.webp'
import node from '../assets/logos/node.png'
import mongo from '../assets/logos/mongo.png'
import express from '../assets/logos/express.png'
import tailwind from '../assets/logos/TailwindCSS.webp'

const Projects = () => {
    
    const { bgColor ,fontColor, cardColor, sColor } = useContext(ThemeContext);

  return (
    <div className='text-white mt-5 md:mt-8 p-8 rounded-lg' style={{backgroundColor: cardColor}}>
        {/* Badge */}
        <div className='inline-block'>
            <div className='flex items-center gap-2 border border-gray-800 px-4 py-[6px] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 md:size-6`} style={{color: sColor}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>
                <span style={{color:fontColor}}>Projects</span>
            </div>
        </div>
        {/* headings */}
        <div className='pt-8 w-full'>
            <div className='mb-5'>
                <p className='text-4xl 2xl:text-5xl text-left font-semibold'><span>Featured</span> <span className='bg-gradient-to-r from-fuchsia-600 to-pink-600 px-2 pb-1 rounded-sm'>Projects</span></p>
                <p className='mt-5' style={{color: fontColor}}>Here are some projects I've been working on, showcasing my skills and experience through various technologies, creative solutions, and practical implementations in web development.</p>
            </div>
        </div>
        {/* projects */}
        <div className='pt-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <a target='_blank' href='https://e-com-front-vercel.vercel.app/' className='group p-2 border border-gray-500/50 rounded-lg relative flex items-center justify-center'>
                <img className='rounded-md group-hover:blur-sm group-hover:bg-blend-overlay' src={ecom} alt="" />
                <div className='absolute w-full h-full rounded-lg hidden group-hover:flex flex-col items-center justify-center group-active:flex'>
                    <div className='flex flex-col items-center justify-center gap-4 w-full h-full rounded-lg bg-black/50'>
                        <p className='px-2 text-2xl font-semibold bg-gradient-to-r from-violet-400 to-purple-300'>Ecommerce Website</p>
                        <div className='h-px bg-white w-1/2'></div>
                        <div className='flex gap-5'>
                            <img className='size-10' src={react} alt="" />
                            <img className='size-10' src={node} alt="" />
                            <img className='size-10' src={express} alt="" />
                            <img className='size-10' src={mongo} alt="" />
                        </div>
                    </div>
                </div>
            </a>
            <a target='_blank' href='https://jobs-page-pied.vercel.app/' className='group p-2 border border-gray-500/50 rounded-lg relative flex items-center justify-center'>
                <img className='rounded-md group-hover:blur-sm group-hover:bg-blend-overlay' src={job} alt="" />
                <div className='absolute w-full h-full rounded-lg hidden group-hover:flex flex-col items-center justify-center group-active:flex'>
                    <div className='flex flex-col items-center justify-center gap-4 w-full h-full rounded-lg bg-black/50'>
                        <p className='px-2 text-2xl font-semibold bg-gradient-to-r from-green-400 to-blue-500'>Fullstack Job Portal</p>
                        <div className='h-px bg-white w-1/2'></div>
                        <div className='flex items-center gap-5'>
                            <img className='size-7' src={vue} alt="" />
                            <img className='size-10' src={node} alt="" />
                            <img className='size-10' src={express} alt="" />
                            <img className='size-10' src={mongo} alt="" />
                        </div>
                    </div>
                </div>
            </a>
            <a target='_blank' href='https://www.tripstins.com/' className='group p-2 border border-gray-500/50 rounded-lg relative flex items-center justify-center'>
                <img className='rounded-md group-hover:blur-sm group-hover:bg-blend-overlay' src={trip} alt="" />
                <div className='absolute w-full h-full rounded-lg hidden group-hover:flex flex-col items-center justify-center group-active:flex'>
                    <div className='flex flex-col items-center justify-center gap-4 w-full h-full rounded-lg bg-black/50'>
                        <p className='px-2 text-2xl font-semibold bg-gradient-to-br from-fuchsia-500 to-rose-500'>Travel Website</p>
                        <div className='h-px bg-white w-1/2'></div>
                        <div className='flex items-center gap-5'>
                            <img className='size-10' src={react} alt="" />
                            <img className='size-10' src={tailwind} alt="" />
                        </div>
                    </div>
                </div>
            </a>
            <a target='_blank' href='https://team-flow-six.vercel.app/' className='group p-2 border border-gray-500/50 rounded-lg relative flex items-center justify-center'>
                <img className='rounded-md group-hover:blur-sm group-hover:bg-blend-overlay' src={team} alt="" />
                <div className='absolute w-full h-full rounded-lg hidden group-hover:flex flex-col items-center justify-center group-active:flex'>
                    <div className='flex flex-col items-center justify-center gap-4 w-full h-full rounded-lg bg-black/50'>
                        <p className='px-2 text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500'>Dummy Website</p>
                        <div className='h-px bg-white w-1/2'></div>
                        <div className='flex items-center gap-5'>
                            <img className='size-10' src={react} alt="" />
                            <img className='size-10' src={tailwind} alt="" />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Projects