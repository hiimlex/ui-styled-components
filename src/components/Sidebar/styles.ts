import styled from 'styled-components';

export const Section = styled.section`
	z-index: 2;
	width: 200px;
	display: flex;
	background: ${(props) => props.theme.colors.background};
	box-shadow: 1px 0 6px rgba(0, 0, 0, 0.15);
	height: 100vh;
	position: fixed;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	span {
		position: absolute;
		z-index: 0;
		bottom: 0;
		background: ${(props) => props.theme.colors.main};
		width: 100%;
		height: 60vh;
		clip-path: polygon(
			0 66%,
			0 46%,
			23% 54%,
			34% 60%,
			46% 68%,
			58% 77%,
			68% 83%,
			75% 87%,
			82% 90%,
			91% 94%,
			100% 100%,
			0 100%
		);
	}
`;

export const Title = styled.div`
	z-index: 2;
	display: flex;
	transition: all 0.5s ease-in;
	margin: 2vh 0;
	&:hover {
		opacity: 0.8;
	}

	h2 {
		font-size: 52px;
		line-height: 52px;
		letter-spacing: 0.02em;
		color: transparent;
		padding: 8px;
	}

	.content {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		h2 {
			position: absolute;
		}

		h2:nth-child(1) {
			color: transparent;
			-webkit-text-stroke: 2px ${(props) => props.theme.colors.text};
		}
		h2:nth-child(2) {
			color: ${(props) => props.theme.colors.text};
			animation: animate 4s ease-in-out infinite;
		}

		@keyframes animate {
			0%,
			100% {
				clip-path: polygon(
					0% 45%,
					15% 44%,
					32% 50%,
					54% 60%,
					70% 61%,
					84% 59%,
					100% 52%,
					100% 100%,
					0% 100%
				);
			}
			50% {
				clip-path: polygon(
					0% 60%,
					16% 65%,
					34% 66%,
					51% 62%,
					67% 50%,
					84% 45%,
					100% 46%,
					100% 100%,
					0% 100%
				);
			}
		}
	}
`;

export const Link = styled.a`
	text-decoration: none;
	color: ${(props) => props.theme.colors.text};
	&:visited&:active {
		color: ${(props) => props.theme.colors.text};
	}
`;

export const Footer = styled.footer`
	position: absolute;
	bottom: 10px;
	display: flex;
	text-align: justify;
	text-justify: inter-word;
	padding: 2vh 1vw;

	p {
		text-align: center;
	}
`;
