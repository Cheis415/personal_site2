import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
	background-color: ${({ scrollNav }) =>
		scrollNav ? 'rgba(0,0,0,0.5)' : 'transparent'};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavLogo = styled.div`
	color: white;
	justify-self: flex-start;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	font-size: 1.5rem;
	height: 100%;
	cursor: pointer;
`;
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		color: white;
		top: 0;
		right: 0;
		transform: translate(-100%, 77%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const ExternalLinks = styled.ul`
	display: flex;
	color: #fff;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const LinkA = styled.a`
	padding: 0 1rem;
	color: #fff;

	&:hover {
		color: #b25fb5;
		transform: scale(1.2);
		transition: 0.2s ease-in-out;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLinks = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-align: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #b25fb5;
	}

	&:hover {
		color: #b25fb5;
		transition: 0.2s ease-in-out;
	}
`;
