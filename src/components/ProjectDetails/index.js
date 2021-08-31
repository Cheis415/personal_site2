import React from 'react';
import { useHistory } from 'react-router';
import { ButtonReg } from '../ButtonElement';
import {
	DetailsContainer,
	DetailsWrapper,
	DetailsRow,
	Column1,
	TextWrapper,
	TopLine,
	Heading,
	TextBody,
	Link,
	BtnWrap,
	Column2,
	ImgWrap,
	Img,
} from './ProjectDetailsElements';

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
	link,
}) => {
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};
	return (
		<>
			<DetailsContainer lightB={lightBg} id={id}>
				<DetailsWrapper>
					<DetailsRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<TextBody darkText={darkText}>{description}</TextBody>

								<BtnWrap>
									<Link target="_blank" rel="noreferrer" href={link}>
										<ButtonReg primary="true" dark="false">
											Link
										</ButtonReg>
									</Link>
									<ButtonReg onClick={goBack} primary="true" dark="false">
										{buttonLabel}
									</ButtonReg>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</DetailsRow>
				</DetailsWrapper>
			</DetailsContainer>
		</>
	);
};

export default ProjectDetails;
