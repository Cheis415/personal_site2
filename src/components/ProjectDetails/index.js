import React from 'react';
import { useHistory } from 'react-router'
import { ButtonReg } from '../ButtonElement'
import {
  DetailsContainer,
  DetailsWrapper,
  DetailsRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  textBody,
  BtnWrap,
  Column2,
  ImgWrap,
  Img
} from "./ProjectDetailsElements"

const ProjectDetails = ({
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
  alt,
  primary,
  dark, 
}) => {
  const history = useHistory()

const goBack = () => {
  history.goBack()
}
  return (
    <>
     <DetailsContainer lightB={lightBg} id={id}>
        <DetailsWrapper>
          <DetailsRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <textBody darkText={darkText}>{description}</textBody>
                <BtnWrap>
                  <ButtonReg 
                  onClick={goBack}
                  primary="true"
                  dark="false"
                  >{buttonLabel}</ButtonReg>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </DetailsRow>
        </DetailsWrapper>
      </DetailsContainer>
    </>
  )
}

export default ProjectDetails
