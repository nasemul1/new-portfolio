import React, { useContext } from 'react'
import { Link, Element } from 'react-scroll'
import { ThemeContext } from '../context/themeContext'

import Intro from '../pages/Intro'
import About from '../pages/About'
import Leftside from './Leftside'
import Skills from '../pages/Skills'

const Middle = () => {

  const { bFontColor, fontColor ,cardColor,sColor } = useContext(ThemeContext);

  return (
    <>
        <Element name="intro">
            <div className='block sm:hidden'>
              <Leftside />
            </div>
            <Intro />
        </Element>
        <Element name="about">
            <About />
        </Element>
        <Element name="skill">
          <Skills />
        </Element>
    </>
  );
}

export default Middle;