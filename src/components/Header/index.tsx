import React, { useContext } from 'react';
import { HeaderTab, Title, Link, Container, Nav } from './styles';
import { FaGithub } from 'react-icons/fa';
import { MdInvertColors } from 'react-icons/md';
import { ThemeContext } from 'styled-components';

interface Props {
	toggleTheme(): void,
	title: string,
}

const Header: React.FC<Props> = (props: Props) => {
	const { colors } = useContext(ThemeContext);

	return (
		<HeaderTab>
			<Container>
				<Title>
					<Link href="https://linktr.ee/yuninho" target="_blank">LeUX</Link>
				</Title>
				<Nav>
					<MdInvertColors size={27} color={colors.white} style={{ cursor: 'pointer', marginRight: 10 }} onClick={props.toggleTheme} />
					<FaGithub size={24} color={colors.white} style={{ cursor: 'pointer' }} onClick={() => { window.open('https://github.com/hiimlex/ui-styled-components/') }} />
				</Nav>
			</Container>
		</HeaderTab>
	);
}

export default Header;
