import styled from 'styled-components';

export const HeaderTab = styled.div`
	width: 100%;
	height: 70px;
	background: ${(props) => props.theme.colors.background};
	display: flex;
	justify-content: center;
	box-shadow: 0 0 104px rgba(0, 0, 0, 0.15);
	z-index: 0;
`;

export const Container = styled.div`
	width: 100%;
	margin: 0 2vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 0.7 1 auto;
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;

export const Version = styled.h6`
	font-size: 14px;
	line-height: 14px;
	letter-spacing: 0.02em;
	font-weight: 600;
	color: ${(props) => props.theme.colors.text};
	background: ${(props) => props.theme.colors.main};
	padding: 6px;
	border-radius: 4px;
	opacity: 0.8;
`;
