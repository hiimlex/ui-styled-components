import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdInvertColors } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import { Container, HeaderTab, Nav, Version } from './styles';

interface Props {
	toggleTheme(): void;
}

const Header: React.FC<Props> = (props: Props) => {
	const { colors } = useContext(ThemeContext);
	const [version, setVersion] = useState('');

	const getRelease = () => {
		axios
			.get('https://api.github.com/repos/hiimlex/ui-styled-components/releases	')
			.then((res) => {
				if (res.data) {
					setVersion('v' + res.data[0].tag_name);
				}
			})
			.catch(() => setVersion('x.x.x'));
	};

	useEffect(() => {
		getRelease();
	}, []);

	return (
		<HeaderTab>
			<Container>
				<Version>
					<b>Software in beta</b> {version}
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
