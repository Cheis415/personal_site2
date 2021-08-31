import React, { useEffect } from 'react';
import Project1 from '../../images/CounselLogin.png';
import Project2 from '../../images/speakerBox.png';
import Project3 from '../../images/MicroBlog.png';
import Project4 from '../../images/HeislerRestaurant.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
	PortfolioContainer,
	PortfolioWrap,
	PortfolioH1,
	PortfolioCard,
	ProjectPic,
	ProjectH2,
	CardWrap,
} from './portfolioElements';
import { ButtonR } from '../ButtonElement';

const Portfolio = () => {
	useEffect(() => {
		AOS.init({ duration: 2000, once: true });
	}, []);

	return (
		<>
			<PortfolioContainer id="projects">
				<PortfolioH1>My Projects</PortfolioH1>
				<PortfolioWrap>
					<CardWrap>
						<PortfolioCard id="card" data-aos="zoom-in">
							<ProjectPic src={Project1} />
							<ProjectH2>Clever Counsel</ProjectH2>
							<ButtonR to="/details">Details</ButtonR>
						</PortfolioCard>
					</CardWrap>
					<CardWrap>
						<PortfolioCard data-aos="zoom-in">
							<ProjectPic src={Project2} />
							<ProjectH2>Speaker Box</ProjectH2>
							<ButtonR to="/details2">Details</ButtonR>
						</PortfolioCard>
					</CardWrap>
					<CardWrap>
						<PortfolioCard data-aos="zoom-in">
							<ProjectPic src={Project3} />
							<ProjectH2>Micro Blog</ProjectH2>
							<ButtonR to="/details3">Details</ButtonR>
						</PortfolioCard>
					</CardWrap>
					<CardWrap>
						<PortfolioCard data-aos="zoom-in">
							<ProjectPic src={Project4} />
							<ProjectH2>Restaurants</ProjectH2>
							<ButtonR to="/details4">Details</ButtonR>
						</PortfolioCard>
					</CardWrap>
				</PortfolioWrap>
			</PortfolioContainer>
		</>
	);
};

export default Portfolio;
