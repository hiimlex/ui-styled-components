import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Link } from './components/Sidebar/styles';
import CardPage from './pages/CardPage';
import GlobalStyle, {
	GlobalContainer,
	InnerContent,
	NotFound,
} from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import deleteAllCookies from './utils/deleteCookies';
import usePersistedState from './utils/usePersistedState';

function App() {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
	const [version, setVersion] = useState('');

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

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
		deleteAllCookies();
		getRelease();
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<GlobalContainer>
					<Sidebar></Sidebar>
					<InnerContent>
						<Header
							toggleTheme={toggleTheme}
							title={theme.title}
							version={version}
						/>
						<Router basename="/ui-styled-components">
							<Switch>
								<Route exact path="/" component={CardPage}></Route>
							</Switch>
						</Router>
					</InnerContent>
				</GlobalContainer>
				<NotFound>
					<FaGithub size={102} color={theme.colors.text} />
					<h1>404</h1>
					<h3>not yet available for mobile devices :{')'}</h3>
					<h3>
						See the docs{' '}
						<Link
							style={{ color: theme.colors.secundary }}
							href="http://github.com/hiimlex/ui-styled-components"
							target="_blank"
							rel="noreferrer"
						>
							here
						</Link>
					</h3>
				</NotFound>
			</ThemeProvider>
		</>
	);
}

export default App;
