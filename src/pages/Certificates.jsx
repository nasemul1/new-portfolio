import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
import dsa from '../assets/certificates/dsa.webp'
import web from '../assets/certificates/web.webp'
import res from '../assets/certificates/res.png'

const Certificates = () => {

    const { fontColor, cardColor, sColor } = useContext(ThemeContext)

  return (
    <div className='text-white mt-5 md:mt-8 p-8 rounded-lg' style={{backgroundColor: cardColor}}>
        {/* badge */}
        <div className='inline-block'>
            <div className='flex items-center gap-2 border border-gray-800 px-4 py-[6px] rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 md:size-6`} style={{color: sColor}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                    </svg>
                <span style={{color:fontColor}}>Certificates</span>
            </div>
        </div>
        {/* headings */}
        <div className='mt-8 w-full'>
            <div className='mb-5'>
                <p className='text-4xl 2xl:text-5xl text-left font-semibold'><span>My</span> <span className='bg-gradient-to-r from-violet-600 to-indigo-600 px-2 pb-1 rounded-sm'>Certificates</span></p>
                <p className='mt-5' style={{color: fontColor}}>Here are some of my certificates that I have earned throughout my learning journey.</p>
            </div>
        </div>

        {/* certificates */}
        <div className='pt-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='p-2 border border-gray-500/50 rounded-lg relative flex items-center justify-center'>
                <img className='rounded-md' src={dsa} alt="" />
            </div>
            <div className='p-2 border border-gray-500/50 rounded-lg relative flex items-center justify-center'>
                <img className='rounded-md' src={web} alt="" />
            </div>
            <div className='p-2 border border-gray-500/50 rounded-lg relative flex items-center justify-center'>
                <img className='rounded-md' src={res} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Certificates