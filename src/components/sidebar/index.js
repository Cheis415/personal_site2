import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  ExternalLinkMenu,
  LinkA,
  Mailto
} from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
          <SidebarLink to='home' onClick={toggle}>
              Home
            </SidebarLink>
            <SidebarLink to='about' onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to='projects' onClick={toggle}>
              Projects
            </SidebarLink>
            <SidebarLink to='contact' onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
          <ExternalLinkMenu>
            <LinkA href="https://github.com/Cheis415"><FaGithub /></LinkA>
            <Mailto email="chadheisler5@gmail.com" subject="Hello & Welcome" body="Hello world!">
              <FaEnvelope />
            </Mailto>
            <LinkA href="https://www.linkedin.com/in/chad-heisler/"><FaLinkedin /></LinkA>
          </ExternalLinkMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
