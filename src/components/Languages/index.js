import React from 'react';

import {
	LanguagesContainer,
	JsIcon,
	SassIcon,
	JqueryIcon,
	FlaskIcon,
	JestIcon,
	MysqlIcon,
	PostgreIcon,
	GithubIcon,
	GitIcon,
	ReactIcon,
	ReduxIcon,
	StyledIcon,
	TsIcon,
	PythonIcon,
	HtmlIcon,
	CssIcon,
	NodeIcon,
	JinjaIcon,
	LanguageWrap,
	LanguageRow,
	LanguageTitle,
	TopLine,
	LanguageH1,
	LanguageP,
	Column1,
	Column2,
	LanguageContainer,
} from './LanguageElements';

const Languages = () => {
	return (
		<>
			<LanguagesContainer id="languages">
				<LanguageWrap>
					<LanguageRow>
						<Column1>
							<LanguageContainer>
								<JsIcon color="#b25fb5" />
								<LanguageTitle>Javscript</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<ReactIcon color="#b25fb5" />
								<LanguageTitle>React</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<HtmlIcon color="#b25fb5" />
								<LanguageTitle>HTML</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<CssIcon color="#b25fb5" />
								<LanguageTitle>CSS</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<StyledIcon color="#b25fb5" />
								<LanguageTitle>Styled Components</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<SassIcon color="#b25fb5" />
								<LanguageTitle>SASS</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<JqueryIcon color="#b25fb5" />
								<LanguageTitle>JQuery</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<ReduxIcon color="#b25fb5" />
								<LanguageTitle>Redux</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<TsIcon color="#b25fb5" />
								<LanguageTitle>TypeScript</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<JestIcon color="#b25fb5" />
								<LanguageTitle>Jest</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<JinjaIcon color="#b25fb5" />
								<LanguageTitle>Jinja</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<PythonIcon color="#b25fb5" />
								<LanguageTitle>Python</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<FlaskIcon color="#b25fb5" />
								<LanguageTitle>FLask</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<NodeIcon color="#b25fb5" />
								<LanguageTitle>Node.Js</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<MysqlIcon color="#b25fb5" />
								<LanguageTitle>MySql</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<PostgreIcon color="#b25fb5" />
								<LanguageTitle>PostgreSQL</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<GithubIcon color="#b25fb5" />
								<LanguageTitle>Github</LanguageTitle>
							</LanguageContainer>
							<LanguageContainer>
								<GitIcon color="#b25fb5" />
								<LanguageTitle>Git</LanguageTitle>
							</LanguageContainer>
						</Column1>
						<Column2>
							<TopLine>Languages & frameworks</TopLine>
							<LanguageH1>What do I know?</LanguageH1>
							<LanguageP>
								The first language I learned was Python. I was learning on my
								own, but then pivoted to JavaScript when I got the opportunity
								to join Code Tenderloin. There I learned the very basics of
								vanilla JavaScript, some CSS, and HTML. I started to fall in
								love with coding even more. From there, I joined Rithm School
								and got introduced to many libraries and frameworks. I spent a
								lot of time on Python and JavaScript, with a lot of different
								libraries and frameworks for each. We did front end projects
								with JQuery, Jinja, React and Redux. We wrote databases using
								PostgreSQL, API's using Node.js and servers using Flask. While I
								haven’t created any projects using TypeScript or SASS, I am
								actively learning those on my own right now. At Rithm School I
								fell in love with React and used it in the majority of my
								projects. I created this website using React and styled
								components. I am very proud of myself for going from knowing
								nothing to becoming a skilled developer in such a short time.
							</LanguageP>
						</Column2>
					</LanguageRow>
				</LanguageWrap>
			</LanguagesContainer>
		</>
	);
};

export default Languages;
