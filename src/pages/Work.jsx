import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'

const Work = () => {

    const { fontColor, cardColor, sColor } = useContext(ThemeContext);

  return (
    <section className='text-white mt-5 md:mt-8 p-8 rounded-lg' style={{backgroundColor: cardColor}}>
        {/* top badge */}
        <div className='inline-block'>
            <div className='flex items-center gap-2 border border-gray-800 px-4 py-[6px] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" style={{color: sColor}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <span style={{color:fontColor}}>Resume</span>
            </div>
        </div>
        
        {/* Work experience */}
        <div className='w-full pt-8'>
          
          <div className='mb-5'>
              <p className='text-4xl 2xl:text-5xl text-left font-semibold'><span>Work</span> <span className='bg-gradient-to-r from-green-400 to-blue-500 px-2 pb-1 rounded-sm'>Experience</span></p>
          </div>
          
          <div className='mb-5'>
            <p className='' style={{color: fontColor}}>Strong communication and teamwork skills, with a focus on delivering exceptional results. </p>
          </div>

          <div className='mb-5 flex justify-center'>
            <div>
              <ul>
                <li className='pb-10 relative flex gap-6'>
                  <div className='mt-1 w-20 md:w-[140px] text-sm text-white'>
                      <a target='_blank' href='https://www.tripstins.com' className='font-bold'>TripStins</a>
                      <p className='text-xs' style={{color: fontColor}}>Nov 2024 - Present</p>
                  </div>
                  <div className='before:mt-2 before:absolute before:ml-[5px] before:h-full before:w-[2px] before:bg-[#858585]'>
                    <div className='mt-2 relative z-10 w-3 h-3 rounded-full' style={{backgroundColor: ' #3498db '}}></div>
                  </div>
                  <div className='flex-1 text-sm text-white'>
                    <p className='text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>Founder & Frontend Developer</p>
                    <p className='mt-2'>All in one travel app. Where you get travel packages, hotel booking, guide hiring and many more to come.</p>
                  </div>
                </li>
                <li className='pb-10 relative flex gap-6'>
                  <div className='mt-1 w-20 md:w-[140px] text-sm text-white'>
                      <a target='_blank' href='https://www.pixelnet.in/' className='font-bold'>PixelNet</a>
                      <p className='text-xs' style={{color: fontColor}}>Oct 2024 - Dec 2024</p>
                  </div>
                  <div className='before:mt-2 before:absolute before:ml-[5px] before:h-full before:w-[2px] before:bg-[#858585]'>
                    <div className='mt-2 relative z-10 w-3 h-3 rounded-full' style={{backgroundColor: ' #3498db '}}></div>
                  </div>
                  <div className='flex-1 text-sm text-white'>
                    <p className='text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>Web Design & Development Intern</p>
                    <p className='mt-2'>PixelNet is a web development and digital marketing agency offering a range of services to enhance online presence and drive business growth.</p>
                  </div>
                </li>
                <li className='relative flex gap-6'>
                  <div className='mt-1 w-20 md:w-[140px] text-sm text-white'>
                      <a target='_blank' href='https://www.admissionassistant.com.bd/' className='font-bold'>Admission Assistant</a>
                      <p className='text-xs' style={{color: fontColor}}>Apr 2022 - Mar 2023</p>
                  </div>
                  <div className='before:mt-2 before:absolute before:ml-[5px] before:h-full before:w-[2px] before:bg-[#858585]'>
                    <div className='mt-2 relative z-10 w-3 h-3 rounded-full' style={{backgroundColor: ' #3498db '}}></div>
                  </div>
                  <div className='flex-1 text-sm text-white'>
                    <p className='text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>Assistant Senior Executive</p>
                    <p className='mt-2'>PixelNet is a web development and digital marketing agency offering a range of services to enhance online presence and drive business growth.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className='w-full pt-10'>
          
          <div className='mb-5'>
              <p className='text-4xl 2xl:text-5xl text-left font-semibold'><span>My</span> <span className='bg-gradient-to-r from-green-400 to-blue-500 px-2 rounded-sm'>Education</span></p>
          </div>
          
          <div className='mb-5'>
            <p className='' style={{color: fontColor}}>I possess strong analytical skills, a diligent work ethic, smart problem-solving abilities, and a keen attention to detail.</p>
          </div>

          <div className='mb-5 flex justify-center'>
            <div>
              <ul>
                <li className='pb-10 relative flex gap-6'>
                  <div className='mt-1 w-20 md:w-[140px] text-sm text-white'>
                      <a target='_blank' href='https://ist.edu.bd/' className='font-bold '>Institute of Science & Technology</a>
                      <p className='text-xs' style={{color: fontColor}}>Nov 2021 - Present</p>
                  </div>
                  <div className='before:mt-2 before:absolute before:ml-[5px] before:h-full before:w-[2px] before:bg-[#858585]'>
                    <div className='mt-2 relative z-10 w-3 h-3 rounded-full' style={{backgroundColor: '#3498db'}}></div>
                  </div>
                  <div className='flex-1 text-sm text-white'>
                    <p className='text-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>B.Sc in CSE</p>
                    <p className='mt-2'>Learning Programming & Software Development, Data Structures & Algorithms, Operating Systems, Database Management Systems (DBMS), Computer Networks & Security and many more</p>
                  </div>
                </li>
                <li className='pb-10 relative flex gap-6'>
                  <div className='mt-1 w-20 md:w-[140px] text-sm text-white'>
                      <p className='font-bold '>Dr. Mahabubur Rahman Molla College</p>
                      <p className='text-xs' style={{color: fontColor}}>June 2018 - June 2020</p>
                  </div>
                  <div className='before:mt-2 before:absolute before:ml-[5px] before:h-full before:w-[2px] before:bg-[#858585]'>
                    <div className='mt-2 relative z-10 w-3 h-3 rounded-full' style={{backgroundColor: '#3498db'}}></div>
                  </div>
                  <div className='flex-1 text-sm text-white'>
                    <p className='text-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>HSC(Science)</p>
                    <p className='mt-2'>Got GPA - 5</p>
                  </div>
                </li>
                <li className='relative flex gap-6'>
                  <div className='mt-1 w-20 md:w-[140px] text-sm text-white'>
                      <p className='font-bold '>Equria Model High School</p>
                      <p className='text-xs' style={{color: fontColor}}>Jan 2016 - Feb 2018</p>
                  </div>
                  <div className='before:mt-2 before:absolute before:ml-[5px] before:h-full before:w-[2px] before:bg-[#858585]'>
                    <div className='mt-2 relative z-10 w-3 h-3 rounded-full' style={{backgroundColor: '#3498db'}}></div>
                  </div>
                  <div className='flex-1 text-sm text-white'>
                    <p className='text-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>SSC(Science)</p>
                    <p className='mt-2'>Got GPA-5</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Work