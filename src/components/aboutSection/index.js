import React from 'react';
import { Button } from '../ButtonElement';
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
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
  buttonLabel,
  img,
  alt
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
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button 
                  to="portfolio"
                  primary='true'
                  dark='true'
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
    </>
  )
}

export default AboutSection;
