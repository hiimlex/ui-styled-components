import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import CardPage from './pages/CardPage';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import deleteAllCookies from './utils/deleteCookies';
import usePersistedState from './utils/usePersistedState';

function App() {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
	const [stage, setStage] = useState('develop');

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	const detectStage = () => {
		if (document.location.href.substr(0, 5) === 'http:') {
			setStage('develop');
		} else {
			setStage('prod');
		}
	};

	useEffect(() => {
		deleteAllCookies();
		detectStage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Router basename="/ui-styled-components">
			<Switch>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Header toggleTheme={toggleTheme} title={theme.title} />
					{stage === 'develop' ? (
						<Redirect from="http://localhost:3000/" to={{ pathname: '/' }} />
					) : null}
					{stage === 'prod' ? (
						<Redirect
							from="https://hiimlex.github.io/"
							to={{ pathname: '/' }}
						/>
					) : null}
					<Route exact path="/" component={CardPage}></Route>
				</ThemeProvider>
			</Switch>
		</Router>
	);
}

export default App;
