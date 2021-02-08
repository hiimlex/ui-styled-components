import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

	}

	body {
		background: ${(props) => props.theme.colors.main};
		font-size: 14px;
		color: ${(props) => props.theme.colors.text};
		font-family: 'Poppins', sans-serif;
		transition: all 0.5s ease-in-out;
	}

	input, select, button, textarea {
		font-family: 'Poppins', sans-serif;
	}

	body::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.main};
    border-radius: 2px;
    width: 8px;
	}

	body::-webkit-scrollbar-thumb {
			background-color: ${(props) => props.theme.colors.primary};
			border-radius: 8px;
	}


`;

export const GlobalContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
	position: relative;

	@media screen and (max-width: 992px) {
		display: none;
	}
`;

export const InnerContent = styled.div`
	display: flex;
	flex-direction: column;
	overflow: auto;
	margin-left: 200px;
`;
