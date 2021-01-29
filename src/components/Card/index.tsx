import React from 'react';
import { Header, Box, HR, Title, Content } from './styles';

interface Props {
	title: string,
}


const Card: React.FC<Props> = (props: Props) => {

	return (
		<Box>
			<Header>
				<Title>{props.title}</Title>
			</Header>
			<HR />
			<Content>

			</Content>
		</Box>
	);
}

export default Card;
