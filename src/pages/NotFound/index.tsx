import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import { Link } from '../../components/Sidebar/styles';

import { Content } from './styles';

const NotFound = () => {
	const { colors } = useContext(ThemeContext);

	return (
		<Content>
			<FaGithub size={102} color={colors.text} />
			<h1>404</h1>
			<h3>not yet available for mobile devices :{')'}</h3>
			<h3>
				See the docs{' '}
				<Link
					style={{ color: colors.secundary }}
					href="http://github.com/hiimlex/ui-styled-components"
					target="_blank"
					rel="noreferrer"
				>
					here
				</Link>
			</h3>
		</Content>
	);
};

export default NotFound;
