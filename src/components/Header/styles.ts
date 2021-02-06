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
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex: 0.7 1 auto;
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;
