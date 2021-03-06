import styled from 'styled-components';

import {
	SiJavascript,
	SiStyledComponents,
	SiReact,
	SiRedux,
	SiTypescript,
	SiHtml5,
	SiJinja,
	SiPython,
	SiNodeDotJs,
	SiCss3,
	SiSass,
	SiJquery,
	SiFlask,
	SiJest,
	SiMysql,
	SiPostgresql,
	SiGithub,
	SiGit,
} from 'react-icons/si';

export const JsIcon = styled(SiJavascript)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const StyledIcon = styled(SiStyledComponents)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const ReactIcon = styled(SiReact)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const ReduxIcon = styled(SiRedux)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;
export const TsIcon = styled(SiTypescript)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const HtmlIcon = styled(SiHtml5)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const JinjaIcon = styled(SiJinja)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const PythonIcon = styled(SiPython)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const NodeIcon = styled(SiNodeDotJs)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const CssIcon = styled(SiCss3)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;
export const SassIcon = styled(SiSass)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const JqueryIcon = styled(SiJquery)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const FlaskIcon = styled(SiFlask)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const JestIcon = styled(SiJest)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const MysqlIcon = styled(SiMysql)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const PostgreIcon = styled(SiPostgresql)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const GithubIcon = styled(SiGithub)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const GitIcon = styled(SiGit)`
	font-size: 2em;

	@media screen and (min-width: 768px) {
		font-size: 3em;
	}
`;

export const LanguagesContainer = styled.div`
	background-color: #010606;
	height: 100vh;

	@media screen and (min-width: 768px) {
		padding: 10px 0;
	}

	@media screen and (max-width: 480px) {
		height: 1200px;
	}
	@media screen and (max-width: 280px) {
		height: 1500px;
	}
`;

export const LanguageWrap = styled.div`
	display: grid;
	z-index: 1;
	height: fit-content;
	width: 100%;

	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const LanguageRow = styled.div`
	display: grid;
	margin-top: 80px;
	align-items: center;
	height: fit-content;
	grid-auto-comlumns: minmax(auto, 1fr);

	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2 col1'` : `'col1 col2'`};

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`};
	}

	@media screen and (max-width: 768px) {
		padding: 20px;
	}
`;

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
	display: flex;
	max-width: 440px;
	flex-wrap: wrap;

	@media screen and (min-width: 768px) {
		padding: 0 30px;
		height: fit-content;
	}

	@media screen and (min-width: 500px) {
		padding: 20px;
	}
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	display: flex;
	overflow: hidden;
	max-width: 440px;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 0 15px;
	grid-area: col2;

	@media screen and (min-width: 768px) {
		padding: 0 30px;
	}
`;

export const LanguageContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	justify-content: center;
	align-items: center;
`;

export const TopLine = styled.p`
	color: #b25fb5;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;

	// @media screen and (min-width: 1120px) {
	// 	margin-top: 50px;
	// 	font-size: 24px;
	// }

	@media screen and (max-width: 1440px) {
		font-size: 14px;
		margin-bottom: 8px;
	}
`;

export const LanguageH1 = styled.h1`
	margin: 5px 20px 20px 0px;
	font-size: 48px;
	font-weight: 600;
	color: #fff;

	@media screen and (max-width: 480px) {
		margin-top: 75px;
		font-size: 32px;
	}
	@media screen and (min-width: 768px) {
		margin-top: 30px;
	}
	@media screen and (max-width: 1440px) {
		font-size: 40px;
		margin: 5px 20px 20px 0px;
	}
`;
export const LanguageTitle = styled.p`
	color: #fff;
	font-size: 10px;
`;

export const LanguageP = styled.p`
	max-width: 440px;
	line-height: 20px;
	margin-bottom: 5px;
	font-size: 14px;
	color: #fff;

	@media screen and (max-width: 480px) {
		font-size: 12px;
	}

	@media screen and (min-width: 768px) {
		font-size: 20px;
		line-height: 24px;
	}
	@media screen and (max-width: 1440px) {
		font-size: 16px;
		line-height: 18px;
	}
`;
