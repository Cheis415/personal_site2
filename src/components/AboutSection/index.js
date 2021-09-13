import React from 'react';
import { Button } from '../ButtonElement';
import Languages from '../Languages';
import {
	AboutContainer,
	AboutRow,
	AboutWrapper,
	BtnWrap,
	Column1,
	Column2,
	Heading,
	Img,
	ImgWrap,
	TextBody,
	TextWrapper,
	TopLine,
} from './aboutElements';

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
								<BtnWrap>
									<Button
										to="projects"
										smooth={true}
										duration={500}
										spy={true}
										primary="true"
										dark="false"
									>
										{buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</AboutRow>
				</AboutWrapper>
			</AboutContainer>
			<Languages />
		</>
	);
};

export default AboutSection;
