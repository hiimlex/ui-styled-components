import styled from 'styled-components';

export const Content = styled.div`
	display: none;

	@media screen and (max-width: 992px) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: center;
		height: 100vh;
		flex-direction: column;
		text-align: center;
	}
`;
