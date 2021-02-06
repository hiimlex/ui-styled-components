import styled from 'styled-components';

export const Section = styled.section`
	position: fixed;
	z-index: 2;
	width: 200px;
	display: flex;
	background: ${(props) => props.theme.colors.main};
	box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
	height: 100vh;
`;
