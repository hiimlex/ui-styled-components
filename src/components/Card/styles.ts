import styled from 'styled-components';

export const Box = styled.div`
	width: auto;
	max-width: 40vw;
	padding: 10px 20px;
	background: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.text};
	box-shadow: 2px 4px 24px rgba(0, 0, 0, 0.1);
	border-radius: 6px;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const HR = styled.hr`
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.text};
	opacity: 0.3;
	border-radius: 4px;
	margin: -5px 0 20px 0;
`;

export const Header = styled.header`
	width: 100%;
	padding: 6px 0 12px 0;
	height: 60px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
`;

export const Actions = styled.div`
	margin: 1vh 0;
	width: 100%;
	height: 24px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h3`
	font-size: 16px;
	color: ${(props) => props.theme.colors.text}
	font-height: 16px;
	letter-spacing: 0.02em;
`;

export const Subtitle = styled.h4`
	font-size: 14px;
	color: ${(props) => props.theme.colors.text}
	font-height: 14px;
	opacity: 0.7;
	font-weight: 400;
	text-align: justify;
	text-justify: inter-word;
	letter-spacing: 0.02em;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	justify-content: flex-start;
	text-align: justify;
	text-justify: inter-word;
	letter-spacing: 0.02em;
`;

export const Button = styled.button`
	width: auto;
	padding: 4px 20px;
	font-size: 14px;
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.colors.white};
	border: none;
	border-radius: 4px;
	background: ${props => props.theme.colors.primary};
`;
