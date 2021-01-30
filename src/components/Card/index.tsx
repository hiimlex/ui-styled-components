import React from 'react';
import { Header, Box, HR, Title, Content, Subtitle, Actions } from './styles';

import Button from '../Button';

interface Props {
	title: string;
	subtitle?: string;
	actions?: boolean;
	confirmButton?: boolean;
	recuseButton?: boolean;
	customStyle?: object;
	confirmButtonText?: string;
	contentText?: string;
}

const Card: React.FC<Props> = (props: Props) => {
	return (
		<Box style={props.customStyle}>
			<Header>
				<Title>{props.title}</Title>
				{props.subtitle ? <Subtitle>{props.subtitle}</Subtitle> : null}
			</Header>
			<HR />
			<Content>{props.contentText}</Content>
			{props.actions ? (
				<Actions>
					{props.recuseButton ? (
						<Button text="Deny"></Button>
					) : (
						<div style={{ display: 'flex', flex: 1 }}></div>
					)}
					{props.confirmButton ? (
						<Button text={props.confirmButtonText}></Button>
					) : null}
				</Actions>
			) : null}
		</Box>
	);
};

export default Card;
