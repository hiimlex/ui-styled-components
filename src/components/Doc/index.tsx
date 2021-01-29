import React, { useContext } from 'react';
import { Container, Title, Description, Children, HR, TextContainer } from './styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ThemeContext } from 'styled-components';


const Doc: React.FC = (props) => {
	const { colors } = useContext(ThemeContext);

	const docText = `import React from 'react';
import Card from './components/Card';

const MyComponent: React.FC = () => {
	return(
		<Card title="Titulo do card" />
	)
}

export default MyComponent;`

	return (
		<Container>
			<TextContainer >
				<Title>Card Component</Title>
				<Description>Card Component that contains a image, and it's possibly rotate the image.</Description>
			</TextContainer>
			<HR />
			<TextContainer >
				<Title>Example:</Title>
				<SyntaxHighlighter language="javascript" style={colors.highlighter} showLineNumbers={true}>
					{docText}
				</SyntaxHighlighter>
			</TextContainer>
			<HR />
			<Children>
				{props.children}
			</Children>
		</Container>
	);
}

export default Doc;
