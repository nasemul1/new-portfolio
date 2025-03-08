import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
import profile from '../assets/profile.png'
import profile1 from '../assets/picofme.png'

const Leftside = () => {

  const { cardColor, bFontColor, fontColor, sFontColor } = useContext(ThemeContext);

  return (
    <aside className="w-full md:min-w-[280px] max-h-[1080px] text-white mb-5 md:mb-5 md:h-full md:pl-10 md:pt-10 md:pb-10 md:pr-0">
        <div className="w-full h-full flex flex-col items-center justify-center rounded-lg text-center px-4 md:px-0 py-8 md:py-0" style={{ backgroundColor: cardColor }}>
          <img
            src={profile1}
            alt="Profile"
            className="w-28 lg:w-32 2xl:w-40 h-28 lg:h-32 2xl:h-40 mx-auto rounded-full border-4 border-[#505050]"
          />
          <h2 className="mt-4 text-xl 2xl:text-2xl font-bold" style={{ color: bFontColor }}>Md Nasemul Islam</h2>
          <p className="2xl:text-xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Full Stack Developer</p>
          <hr className="w-3/4 border-gray-500 opacity-35 my-7"/>
          <div className='w-full px-8 2xl:px-10'>
            <div className='flex justify-between'>
              <p className='2xl:text-xl'>Residence:</p>
              <p className='2xl:text-xl' style={{color: fontColor}}>Bangladesh</p>
            </div>
            <div className='flex justify-between'>
              <p className='2xl:text-xl'>City:</p>
              <p className='2xl:text-xl' style={{color: fontColor}}>Dhaka</p>
            </div>
            <div className='flex justify-between'>
              <p className='2xl:text-xl'>Age:</p>
              <p className='2xl:text-xl' style={{color: fontColor}}>23</p>
            </div>
          </div>
          <div className='w-full mt-7 mb-3 px-6 2xl:px-8'>
            <div className='flex justify-center rounded-md gap-6 bg-[#1a1a1a] p-2'>
              <a href="https://github.com/nasemul1" target='_blank'>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Github--Streamline-Simple-Icons" height={20} width={20} ><desc>{"Github Streamline Icon: https://streamlinehq.com"}</desc><title>{"GitHub"}</title><path d="M12 0.297c-6.63 0 -12 5.373 -12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82 -0.258 0.82 -0.577 0 -0.285 -0.01 -1.04 -0.015 -2.04 -3.338 0.724 -4.042 -1.61 -4.042 -1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087 -0.744 0.084 -0.729 0.084 -0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495 0.998 0.108 -0.776 0.417 -1.305 0.76 -1.605 -2.665 -0.3 -5.466 -1.332 -5.466 -5.93 0 -1.31 0.465 -2.38 1.235 -3.22 -0.135 -0.303 -0.54 -1.523 0.105 -3.176 0 0 1.005 -0.322 3.3 1.23 0.96 -0.267 1.98 -0.399 3 -0.405 1.02 0.006 2.04 0.138 3 0.405 2.28 -1.552 3.285 -1.23 3.285 -1.23 0.645 1.653 0.24 2.873 0.12 3.176 0.765 0.84 1.23 1.91 1.23 3.22 0 4.61 -2.805 5.625 -5.475 5.92 0.42 0.36 0.81 1.096 0.81 2.22 0 1.606 -0.015 2.896 -0.015 3.286 0 0.315 0.21 0.69 0.825 0.57C20.565 22.092 24 17.592 24 12.297c0 -6.627 -5.373 -12 -12 -12" fill="#858585" strokeWidth={1} /></svg>
              </a>
              <a href="https://www.linkedin.com/in/nasemul1/" target='_blank'>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Linkedin--Streamline-Simple-Icons" height={20} width={20} ><desc>{"Linkedin Streamline Icon: https://streamlinehq.com"}</desc><title>{"LinkedIn"}</title><path d="M20.447 20.452h-3.554v-5.569c0 -1.328 -0.027 -3.037 -1.852 -3.037 -1.853 0 -2.136 1.445 -2.136 2.939v5.667H9.351V9h3.414v1.561h0.046c0.477 -0.9 1.637 -1.85 3.37 -1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0 -2.063 -0.926 -2.063 -2.065 0 -1.138 0.92 -2.063 2.063 -2.063 1.14 0 2.064 0.925 2.064 2.063 0 1.139 -0.925 2.065 -2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0h0.003z" fill="#858585" strokeWidth={1} /></svg>
              </a>
              <a href="" target='_blank'>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Facebook--Streamline-Simple-Icons" height={20} width={20} >
                  <desc>{"Facebook Streamline Icon: https://streamlinehq.com"}</desc><title>{"Facebook"}</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0 -4.085 1.848 -5.978 5.858 -5.978 0.401 0 0.955 0.042 1.468 0.103a8.68 8.68 0 0 1 1.141 0.195v3.325a8.623 8.623 0 0 0 -0.653 -0.036 26.805 26.805 0 0 0 -0.733 -0.009c-0.707 0 -1.259 0.096 -1.675 0.309a1.686 1.686 0 0 0 -0.679 0.622c-0.258 0.42 -0.374 0.995 -0.374 1.752v1.297h3.919l-0.386 2.103 -0.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0 -6.627 -5.373 -12 -12 -12s-12 5.373 -12 12c0 5.628 3.874 10.35 9.101 11.647Z" fill="#858585" strokeWidth={1} /></svg>
              </a>
              <a href="" target='_blank'>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="X--Streamline-Simple-Icons" height={20} width={20} ><desc>{"X Streamline Icon: https://streamlinehq.com"}</desc><title>{"X"}</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="#858585" strokeWidth={1} /></svg>
              </a>
            </div>
          </div>
          <a href='' className='w-full px-6 2xl:px-8'>
            <div className='font-semibold w-full py-[6px] rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
              Download CV
            </div>
          </a>
        </div>
    </aside>
  )
}

export default Leftside