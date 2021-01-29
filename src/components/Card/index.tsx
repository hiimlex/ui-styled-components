import React from 'react';
import { Header, Box, HR, Title, Content, Subtitle, Actions, Button } from './styles';

interface Props {
	title: string,
	subtitle?: string,
	actions?: boolean,
	confirmButton?: boolean;
	recuseButton?: boolean;
	customStyle?: object;
	confirmButtonText?: string;
}


const Card: React.FC<Props> = (props: Props) => {

	return (
		<Box style={props.customStyle}>
			<Header>
				<Title>{props.title}</Title>
				{props.subtitle ? <Subtitle>{props.subtitle}</Subtitle> : null}
			</Header>
			<HR />
			<Content>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime officiis quo quidem qui! Quasi labore repellendus odio cumque quis aut quo possimus atque id vero dolores odit, a voluptas?
			</Content>
			{props.actions ?
				<Actions>
					{props.recuseButton ? <Button></Button> : <div style={{ display: 'flex', flex: 1 }}></div>}
					{props.confirmButton ? <Button>{props.confirmButtonText}</Button> : null}
				</Actions>
				:
				null}
		</Box>
	);
}

export default Card;
