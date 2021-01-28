import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 4vh 0;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.h4`
	width: 70%;
	font-size: 20px;
	color: ${props => props.theme.colors.text};
	line-height: 20px;
	cursor: pointer;
	flex: 1 1 auto;
`;

export const Description = styled.h6`
	width: 70%;
	margin-top: 20px;
	font-size: 16px;
	color: ${props => props.theme.colors.text};
	opacity: 0.8;
	line-height: 16px;
	font-weight: 400;
	flex: 1 1 auto;
`;

export const Pre = styled.pre`
	width: 70%;
	background: ${props => props.theme.colors.background};
	padding: 12px;
	border-radius: 8px;
	flex: 1 1 auto;
`;

export const Code = styled.code`
	display: flex;
	text-align: left;
	color: ${props => props.theme.colors.text};
	font-weight: bold;
`;

export const Children = styled.div`
	margin-top: 4vh;
	display: flex;
	justify-content: center;
`;
