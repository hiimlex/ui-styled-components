import styled from 'styled-components';

export const Section = styled.section`
	z-index: 2;
	width: 200px;
	display: flex;
	background: ${(props) => props.theme.colors.background};
	box-shadow: 1px 0 6px rgba(0, 0, 0, 0.15);
	height: 100vh;
	position: fixed;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	color: ${(props) => props.theme.colors.text};
	font-size: 24px;
	line-height: 24px;
	border: 2px solid;
	padding: 8px;
	border-color: ${(props) => props.theme.colors.text};
	text-decoration: underline;
	display: flex;
	&:hover {
		opacity: 0.8;
	}
	margin: 2vh 0;
`;

export const Link = styled.a`
	color: ${(props) => props.theme.colors.text};
	&:visited&:active {
		color: ${(props) => props.theme.colors.text};
	}
`;
