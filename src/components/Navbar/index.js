import React, { useState, useEffect } from 'react';
import { FaBars, FaRegAddressCard, FaGithub, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Resume from '../../images/ChadHeislerJulyResume.pdf';
import {
	Nav,
	NavLogo,
	MobileIcon,
	NavContainer,
	NavMenu,
	NavItem,
	NavLinks,
	ExternalLinks,
	LinkA,
} from './NavElements';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavContainer>
					<NavLogo onClick={toHome}>Chad Heisler</NavLogo>
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
								exact="true"
								offset={-80}
							>
								Home
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
							>
								About
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
							>
								Skillset
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="projects"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Projects
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="contact"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Contact
							</NavLinks>
						</NavItem>
					</NavMenu>
					<ExternalLinks>
						<LinkA target="_blank" href="https://github.com/Cheis415">
							<FaGithub />
						</LinkA>
						<LinkA target="_blank" href={Resume}>
							<FaRegAddressCard />
						</LinkA>
						<LinkA
							target="_blank"
							href="https://www.linkedin.com/in/chad-heisler/"
						>
							<FaLinkedin />
						</LinkA>
					</ExternalLinks>
				</NavContainer>
			</Nav>
		</>
	);
};

export default Navbar;
