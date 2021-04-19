import React from 'react';
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

} from "react-icons/si"

import {
  LanguagesContainer,
  LanguageWrap,
  LanguageRow,
  LanguageTitle,
  LanguageH1,
  LanguageP,
  Column1,
  Column2,
  LanguageContainer

} from "./LanguageElements"

const Languages = () => {
  return (
    <>
      <LanguagesContainer id='languages'>
        <LanguageWrap>
          <LanguageRow>
            <Column1>
          <LanguageContainer>
            <SiJavascript size="2em" color="#00DAE8"/>
            <LanguageTitle >Javscript</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiReact size="2em" color="#00DAE8"/>
            <LanguageTitle >React</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiHtml5 size="2em" color="#00DAE8"/>
            <LanguageTitle >HTML</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiCss3 size="2em" color="#00DAE8"/>
            <LanguageTitle >CSS</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiStyledComponents size="2em" color="#00DAE8"/>
            <LanguageTitle >Styled Components</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiSass size="2em" color="#00DAE8"/>
            <LanguageTitle >SASS</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiJquery size="2em" color="#00DAE8"/>
            <LanguageTitle >JQuery</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiRedux size="2em" color="#00DAE8"/>
            <LanguageTitle >Redux</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiTypescript size="2em" color="#00DAE8"/>
            <LanguageTitle >TypeScript</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiJest size="2em" color="#00DAE8"/>
            <LanguageTitle >Jest</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiJinja size="2em" color="#00DAE8"/>
            <LanguageTitle >Jinja</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiPython size="2em" color="#00DAE8"/>
            <LanguageTitle >Python</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiFlask size="2em" color="#00DAE8"/>
            <LanguageTitle >FLask</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiNodeDotJs size="2em" color="#00DAE8"/>
            <LanguageTitle >Node.Js</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiMysql size="2em" color="#00DAE8"/>
            <LanguageTitle >MySql</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiPostgresql size="2em" color="#00DAE8"/>
            <LanguageTitle >PostgreSQL</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiGithub size="2em" color="#00DAE8"/>
            <LanguageTitle >Github</LanguageTitle>
          </LanguageContainer>
          <LanguageContainer>
            <SiGit size="2em" color="#00DAE8"/>
            <LanguageTitle >Git</LanguageTitle>
          </LanguageContainer>
          </Column1>
          <Column2>
          <LanguageH1>What do I know?</LanguageH1>
          <LanguageP>The first language I learned was Python. I was learning on my own,
but then pivoted to JavaScript when I got the opportunity to join Code Tenderloin. There I learned the very basics of vanilla JavaScript, some CSS, and HTML. I started to fall in love with coding even more. From there, I joined Rithm School and got introduced to many libraries and frameworks. I spent a lot of time on Python and JavaScript, with a lot of different libraries and frameworks for each. We did front end projects with JQuery, Jinja, React and Redux. We wrote databases using PostgreSQL, API's using Node.js and servers using Flask. While I haven’t created any projects using TypeScript or SASS, I am actively learning those on my own right now. At Rithm School I fell in love with React and used it in the majority of my projects. I created this website using React and styled components. I am very proud of myself for going from knowing nothing to becoming a skilled developer in such a short time. 

          </LanguageP>
          </Column2>
          </LanguageRow>
        </LanguageWrap>
      </LanguagesContainer>
    </>
  )
}

export default Languages;