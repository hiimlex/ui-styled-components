import styled from 'styled-components';

export const Container = styled.div`
	width: 70%;
	min-height: auto;
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 4vh 0;
	align-items: flex-start;
	justify-content: center;
`;

export const Title = styled.h4`
	width: auto;
	font-size: 20px;
	color: ${props => props.theme.colors.text};
	line-height: 20px;
	cursor: pointer;
	flex: 0.5 1 auto;
`;

export const Description = styled.h6`
	width: auto;
	font-size: 16px;
	color: ${props => props.theme.colors.text};
	opacity: 0.8;
	line-height: 16px;
	font-weight: 400;
	flex: 0.5 1 auto;
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
`;
