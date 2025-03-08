import React from 'react'
import { Link, Element } from 'react-scroll'

import Intro from '../pages/Intro'
import About from '../pages/About'
import Leftside from './Leftside'
import Skills from '../pages/Skills'
import Work from '../pages/Work'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

const Middle = () => {


  return (
    <>
        <Element name="intro">
            <div className='block md:hidden'>
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
        <Element name="work">
          <Work />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name='contact'>
          <Contact />
        </Element>
    </>
  );
}

export default Middle;