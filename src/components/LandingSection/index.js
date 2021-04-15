import React, { useState } from 'react';
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement"
import profilePic from "../../images/IMG_1041.png"
import {
  LandingConatiner,
  LandingBg,
  VideoBg,
  LandingContent,
  LandingH1,
  LandingP,
  LandingBtnWrapper,
  ArrowForward,
  ArrowBottom,
  LandingPic
} from "./LandingElements"

const LandingSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <>
      <LandingConatiner>
        <LandingBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
        </LandingBg>
        <LandingContent>
           <LandingPic src={profilePic}/>
           <LandingH1>Hi I'm Chad.</LandingH1>
           <LandingP>I have a passion for beautiful, responsive code.</LandingP>
           <LandingBtnWrapper>
             <Button 
               to="about" 
               onMouseEnter={onHover}
               onMouseLeave={onHover}
               primary='true'
               dark='true'
               >
                Here I am! {hover 
                  ? <ArrowForward />
                  : <ArrowBottom /> 
                }
             </Button>
           </LandingBtnWrapper>
        </LandingContent>
      </LandingConatiner>
    </>
  )
}

export default LandingSection;