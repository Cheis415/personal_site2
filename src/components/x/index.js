import React from 'react';
import { Button } from '../ButtonElement';
import Languages from '../Languages';
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  TextBody,
  BtnWrap,
  Column2,
  ImgWrap,
  Img
} from "./aboutElements";

const AboutSection = ({
  lightBg, 
  id, 
  imgStart, 
  topLine, 
  lightText,
  headline,
  darkText,
  description,
  description2,
  buttonLabel,
  img,
  alt, 
}) => {
  return (
    <>
      <AboutContainer lightB={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <TextBody darkText={darkText}>{description}</TextBody>
                <TextBody darkText={darkText}>{description2}</TextBody>
                <BtnWrap>
                  <Button 
                  to='projects'
                  primary="true"
                  dark="false"
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
      <Languages />
    </>
  )
}

export default AboutSection;
