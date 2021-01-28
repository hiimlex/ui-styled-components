import React from 'react';

import { Container,Title, Description, Children, Pre, Code } from './styles';

const Doc: React.FC = (props) => {


	return(
		<Container>
			<Title>Card Component</Title>
			<Description>Card Component that contains a image, and it's possibly rotate the image.</Description>
			<br/>
			<Title>Example:</Title>
			<br/>
			<Pre>
				<Code>
					{`<Card
  title="string"
  uri="string"
/>`}
				</Code>
			</Pre>
			<Children>
			{props.children}
			</Children>
		</Container>
	);
}

export default Doc;
