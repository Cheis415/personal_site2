import React, { useState } from 'react';
import profilePic from '../../images/DSC00255.jpeg';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import {
	ArrowBottom,
	ArrowForward,
	LandingBg,
	LandingBtnWrapper,
	LandingConatiner,
	LandingContent,
	LandingH1,
	LandingP,
	LandingPic,
	PicContainer,
	VideoBg,
} from './LandingElements';

const LandingSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};
	return (
		<>
			<LandingConatiner id="home">
				<LandingBg>
					<VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
				</LandingBg>
				<LandingContent>
					<PicContainer>
						<LandingPic src={profilePic} />
					</PicContainer>
					<LandingH1>Hi I'm Chad.</LandingH1>
					<LandingP>I have a passion for beautiful, responsive code.</LandingP>
					<LandingBtnWrapper>
						<Button
							to="about"
							smooth={true}
							duration={500}
							spy={true}
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							primary="true"
							dark="true"
						>
							Here I am! {hover ? <ArrowForward /> : <ArrowBottom />}
						</Button>
					</LandingBtnWrapper>
				</LandingContent>
			</LandingConatiner>
		</>
	);
};

export default LandingSection;
