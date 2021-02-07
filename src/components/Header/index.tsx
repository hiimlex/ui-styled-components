import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdInvertColors } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import { Container, HeaderTab, Nav, Version } from './styles';

interface Props {
	toggleTheme(): void;
	title: string;
	version?: string;
}

const Header: React.FC<Props> = (props: Props) => {
	const { colors } = useContext(ThemeContext);

	return (
		<HeaderTab>
			<Container>
				<Version>
					<b>Software in beta</b> {props.version ? props.version : '0.0.X'}
				</Version>
				<Nav>
					<MdInvertColors
						size={27}
						color={colors.text}
						style={{ cursor: 'pointer', marginRight: 10 }}
						onClick={props.toggleTheme}
					/>
					<FaGithub
						size={24}
						color={colors.text}
						style={{ cursor: 'pointer' }}
						onClick={() => {
							window.open('https://github.com/hiimlex/ui-styled-components/');
						}}
					/>
				</Nav>
			</Container>
		</HeaderTab>
	);
};

export default Header;
