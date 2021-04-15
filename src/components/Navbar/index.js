import React from 'react';
import { FaBars, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
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

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <LinkA href={`mailto:${email}${params}`}>{children}</LinkA>;
  };
  return (
   <>
    <Nav>
      <NavContainer>
        <NavLogo>
          Chad Heisler
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
        <NavItem>
            <NavLinks to="home">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
        <ExternalLinks >
          <LinkA href="https://github.com/Cheis415"><FaGithub /></LinkA>
          <Mailto email="chadheisler5@gmail.com" subject="Hello & Welcome" body="Hello world!">
            <FaEnvelope />
          </Mailto>
          <LinkA href="https://www.linkedin.com/in/chad-heisler/"><FaLinkedin /></LinkA>
        </ExternalLinks>
      </NavContainer>
    </Nav>
   </>
  )
}

export default Navbar;
