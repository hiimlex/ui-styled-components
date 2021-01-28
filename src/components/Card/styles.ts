import styled from 'styled-components';

export const Box = styled.div`
	width: 80vw;
	padding: 10px 20px;
	background: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.text};
	box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
	border-radius: 8px;

	display: flex;
	flex-direction: column;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 56vh;
	justify-content: space-between;
	flex: 1 1 auto;
`;

export const Image = styled.img`
	margin-top: 6vh;
	height: 48vh;
	width: 100%;
	border-radius: 4px;
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
	padding: 20px 0;
	height: 60px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h3`
	font-size: 16px;
	color: ${(props) => props.theme.colors.text}
	font-height: 16px;
`;
