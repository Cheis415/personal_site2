import styled from 'styled-components';

export const PortfolioContainer = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #fff;

	@media screen and (max-width: 768px) {
		height: 1100px;
	}

	@media screen and (max-width: 480px) {
		height: 1200px;
	}
`;

export const PortfolioWrap = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 24px;
	padding: 25px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 16px
		padding: 0 20px;
	}

	@media screen and (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 16px
		padding: 0 20px;
	}
`;

export const PortfolioCard = styled.div`
	background: #cfcfcf;
	display: flex;
	flex-direction: column;
	will-change: transform, opacity;
	background-size: cover;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	max-height: 320px;
	padding: 5px;

	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const CardWrap = styled.div`
	&:hover {
		transform: scale(1.1);
		transition: all 0.2s ease-in-out;
	}
`;

export const ProjectPic = styled.img`
	width: 225px;
	height: 150px;
	margin-bottom: 10px;
	border-radius: 5px;

	@media screen and (max-width: 480px) {
		height: 120px;
		width: 200px;
	}
	@media screen and (min-width: 1600px) {
		height: 200px;
		width: 250px;
	}
`;

export const PortfolioH1 = styled.h1`
	font-size: 4.5rem;
	border-bottom: 8px solid black;
	padding: 5px;
	color: #000;
	margin-top: 15px;
	margin-bottom: 15px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
		border-bottom: 4px solid black;
		margin-bottom: 16px;
		margin-top: 16px;
	}
`;

export const ProjectH2 = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 5px;
`;

export const PortfolioP = styled.p`
	font-size: 1rem;
	text-align: center;
`;
