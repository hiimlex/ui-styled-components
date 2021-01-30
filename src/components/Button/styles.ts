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
`;
