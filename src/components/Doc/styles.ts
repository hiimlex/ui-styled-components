import styled from 'styled-components';

export const Container = styled.div`
	width: auto;
	min-height: auto;
	margin: 1vh 2vw;
	display: flex;
	flex-direction: column;
	padding: 4vh 0;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const Title = styled.h4`
	width: auto;
	font-size: 20px;
	color: ${(props) => props.theme.colors.text};
	line-height: 20px;
	cursor: pointer;
	flex: 0.5 1 auto;
	margin-bottom: 1vh;
	letter-spacing: 0.02em;
`;

export const Example = styled.h4`
	width: auto;
	font-size: 16px;
	color: ${(props) => props.theme.colors.text};
	line-height: 1.75em;
	flex: 0.5 1 auto;
	margin-bottom: 1vh;
	letter-spacing: 0.02em;
`;

export const Description = styled.h6`
	width: auto;
	font-size: 14px;
	color: ${(props) => props.theme.colors.text};
	opacity: 0.8;
	line-height: 1.5em;
	font-weight: 400;
	flex: 0.5 1 auto;
	margin-bottom: 1vh;
	text-align: justify;
	text-justify: inter-word;
	letter-spacing: 0.02em;
`;

export const Children = styled.div`
	display: flex;
	justify-content: center;
	align-self: center;
	margin: 1vh 0;
`;

export const HR = styled.hr`
	border: 1px solid;
	width: 100%;
	opacity: 0.2;
	margin: 0.5vh 0;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1 1 auto;
	width: 100%;
	padding: 2px;
	margin: 1vh 0;
	height: auto;
`;
