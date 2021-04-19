import React, { useState, useEffect } from 'react';
import { FaBars, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from "react-scroll"
import { 
  Nav, 
  NavLogo, 
  MobileIcon,
  NavContainer,
  NavMenu,
  NavItem,
  NavLinks,
  ExternalLinks,
  LinkA
} from "./NavElements";
// import Logo from "./logo-nobackground.svg";


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toHome = () => {
    scroll.scrollToTop();
  }

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <LinkA target="_blank" href={`mailto:${email}${params}`}>{children}</LinkA>;
  };
  return (
   <>
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo onClick={toHome}>
          Chad Heisler
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
        <NavItem>
            <NavLinks 
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              // exact='true'
              offset={-80}
            >About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="languages"
              smooth={true}
              duration={500}
              spy={true}
              // exact='true'
              offset={-80}
            >Skillset
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
        <ExternalLinks >
          <LinkA target="_blank" href="https://github.com/Cheis415"><FaGithub /></LinkA>
          <Mailto email="chadheisler5@gmail.com" subject="Hello & Welcome" body="Hello world!">
            <FaEnvelope />
          </Mailto>
          <LinkA target="_blank" href="https://www.linkedin.com/in/chad-heisler/"><FaLinkedin /></LinkA>
        </ExternalLinks>
      </NavContainer>
    </Nav>
   </>
  )
}

export default Navbar;
