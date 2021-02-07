import styled from 'styled-components';

export const Confirm = styled.button`
	width: auto;
	padding: 4px 20px;
	font-size: 14px;
	font-weight: bold;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.white};
	border: none;
	border-radius: 4px;
	background: ${(props) => props.theme.colors.primary};
	cursor: pointer;
	transition: all 0.5s ease;
	opacity: 1;

	&:hover {
		opacity: 0.9;
		box-shadow: 2px 4px 24px rgba(0, 0, 0, 0.2);
	}

	&:focus {
		border: none;
		outline: none;
		background: ${(props) => props.theme.colors.white};
		color: ${(props) => props.theme.colors.primary};
	}
`;
