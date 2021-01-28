import styled from 'styled-components';

export const HeaderTab = styled.div`
	width: 100%;
	height: 60px;
	background: ${props => props.theme.colors.primary};
	display: flex;
	justify-content: center;
	box-shadow: 0 16px 100px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 0.7 1 auto;
`;

export const Title = styled.h1`
	color: ${props => props.theme.colors.white};
	font-size: 24px;
	line-height: 24px;
	border: 2px solid;
	padding: 8px;
	border-color: ${props => props.theme.colors.white};
	text-decoration: underline;
	display: flex;
	&:hover{
		opacity: 0.8;
	}
`;

export const Link = styled.a`
	color: ${props => props.theme.colors.white};
	&:visited&:active{
		color: ${props => props.theme.colors.white};
	}

`

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;

