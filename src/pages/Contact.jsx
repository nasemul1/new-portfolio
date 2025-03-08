import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
import portrait from '../assets/image.jpeg'

const Contact = () => {
    
    const { fontColor, cardColor, sColor } = useContext(ThemeContext);

  return (
    <div className='text-white mt-5 sm:mt-8 p-8 rounded-lg mb-20 md:mb-0' style={{backgroundColor: cardColor}}>
      {/* Badge */}
      <div className='inline-block'>
            <div className='flex items-center gap-2 border border-gray-800 px-4 py-[6px] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 sm:size-6`} style={{color: sColor}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span style={{color:fontColor}}>Contact</span>
            </div>
        </div>
        {/* headings */}
        <div className='mt-8 w-full'>
            <div className='mb-5'>
                <p className='text-4xl 2xl:text-5xl text-left font-semibold'><span className='bg-gradient-to-r from-red-500 to-orange-500 px-2 pb-1 rounded-sm'>Contact</span> <span>Me</span> </p>
                <p className='mt-5' style={{color: fontColor}}>Let's work together! Feel free to send me a message.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-8 flex flex-col md:flex-row gap-5'>
            <div className='w-full md:w-1/3 flex flex-col gap-5'>
                <div className='w-full hidden md:block'>
                  <img className=' rounded-md' src={portrait} alt="" />
                </div>
                <div className='rounded-md w-full py-10 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <p className='text-xl font-semibold'>Email</p>
                  <hr className='w-1/3'/>
                  <a href="mailto:nasemul.me@gmail.com" className="mt-2 hover:underline">nasemul.me@gmail.com</a>
                  <div className='mt-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </svg>
                  </div>
                  <p className=' text-xl font-semibold'>Phone</p>
                  <hr className='w-1/3'/>
                  <a href="tel:+8801688539299" className="mt-2 hover:underline">+8801688539299</a>
                </div>
            </div>
            <div className='w-full md:w-2/3 p-10 md:p-5 border border-blue-500 rounded-md flex flex-col items-center justify-center'>
              <p className='w-full md:w-2/3 text-3xl'>I'd love to hear from you.</p>
              <p className='w-full md:w-2/3' style={{color: fontColor}}>Leave a message below, I'll get back to you as soon as possible</p>
              <form action="mailto:nasemul.me@gmail.com" method="post" enctype="text/plain" className='w-full md:w-2/3 mt-5 flex flex-col'>
                <label className='text-lg font-medium' htmlFor="name">Name</label>
                <input className='border rounded-xs py-1 px-2 font-normal' type="text" name="name" id="name" />
                <label className='mt-4 text-lg font-medium' htmlFor="email">Email</label>
                <input className='border rounded-xs py-1 px-2 font-normal' type="text" name="email" id="email" />
                <label className='mt-4 text-lg font-medium' htmlFor="message">Message</label>
                <textarea className='border rounded-xs py-1 px-2 font-normal' type="text" name="message" id="message" />
                <button className='mt-4 py-2 rounded-sm bg-gradient-to-r from-indigo-500 to-blue-500 cursor-pointer'>Send Message</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact