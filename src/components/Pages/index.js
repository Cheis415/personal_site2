import React, { useState } from 'react'
import AboutSection from '../AboutSection';
import { homeObjOne } from '../AboutSection/Data';
import Contact from '../Contact';
import LandingSection from '../LandingSection';

import Navbar from '../Navbar'
import Portfolio from '../Portfolio';
import Sidebar from '../Sidebar'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <LandingSection />
      <AboutSection {...homeObjOne} />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home
