import React, { Dispatch, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Header, Box, HR, Title, Content, Image } from './styles';
import { AiOutlineRotateRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';

interface Props {
	title: string,
	uri: string,
}

interface rotateData {
	degree: number,
	translate: number,
}


const Card: React.FC<Props> = (props: Props) => {
	const { colors } = useContext(ThemeContext);
	const [rotate, setRotate] = useState<rotateData>({
		degree: 0,
		translate: 0,
	});

	const iconStyles: IconContext = {
		color: colors.text,
		style: {
			position: 'absolute',
			zIndex: 2,
			cursor: 'pointer'
		},
	}

	const rotateImage = (rotateData: Dispatch<rotateData>) =>{
		rotateData({degree: rotate.degree + 90, translate: 25});
	}

	return (
		<Box>
			<Header>
				<Title>{props.title}</Title>
			</Header>
			<HR />
			<Content>
				<IconContext.Provider value={iconStyles}>
					<AiOutlineRotateRight size={24} onClick={() => {rotateImage(setRotate)}}/>
				</IconContext.Provider>
				<Image src={props.uri} />
			</Content>
		</Box>
	);
}

export default Card;
