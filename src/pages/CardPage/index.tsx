import React from 'react';
import Card from '../../components/Card';
import Doc from '../../components/Doc';

const CardPage: React.FC = () => {
	return (
		<Doc>
			<Card
				title="Title of the card."
				subtitle="Subtitle of the card."
				actions
				confirmButton
				confirmButtonText="Ok"
				contentText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime
				officiis quo quidem qui! Quasi labore repellendus odio cumque quis aut
				quo possimus atque id vero dolores odit, a voluptas?"
			></Card>
		</Doc>
	);
};

export default CardPage;
