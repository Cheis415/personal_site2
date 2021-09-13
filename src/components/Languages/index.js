import React from 'react';
import {
	Column1,
	Column2,
	CssIcon,
	FlaskIcon,
	GithubIcon,
	GitIcon,
	HtmlIcon,
	JestIcon,
	JinjaIcon,
	JqueryIcon,
	JsIcon,
	LanguageContainer,
	LanguageH1,
	LanguageP,
	LanguageRow,
	LanguagesContainer,
	LanguageTitle,
	LanguageWrap,
	MysqlIcon,
	NodeIcon,
	PostgreIcon,
	PythonIcon,
	ReactIcon,
	ReduxIcon,
	SassIcon,
	StyledIcon,
	TopLine,
	TsIcon,
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
								I went to Rithm School, an imersive fullstack bootcamp,and got
								introduced to many libraries and frameworks. I spent a lot of
								time on Python and JavaScript, with a lot of different libraries
								and frameworks for each. We did front end projects with JQuery,
								Jinja, React and Redux. We wrote databases using PostgreSQL,
								API's using Node.js and servers using Flask. At Rithm School I
								fell in love with React and use it in the majority of my
								projects.
							</LanguageP>
						</Column2>
					</LanguageRow>
				</LanguageWrap>
			</LanguagesContainer>
		</>
	);
};

export default Languages;
