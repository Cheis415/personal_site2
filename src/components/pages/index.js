import React, { useState } from 'react'
import AboutSection from '../aboutSection';
import { homeObjOne } from '../aboutSection/Data';
import LandingSection from '../LandingSection';
import Navbar from '../Navbar'
import Sidebar from '../sidebar'

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
    </>
  )
}

export default Home
