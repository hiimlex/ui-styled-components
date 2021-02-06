import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CardPage from './pages/CardPage';
import GlobalStyle, { GlobalContainer, InnerContent } from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import deleteAllCookies from './utils/deleteCookies';
import usePersistedState from './utils/usePersistedState';

function App() {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	useEffect(() => {
		deleteAllCookies();
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<GlobalContainer>
					<Sidebar></Sidebar>
					<InnerContent>
						<Header toggleTheme={toggleTheme} title={theme.title} />
						<Router basename="/ui-styled-components">
							<Switch>
								<Route exact path="/" component={CardPage}></Route>
							</Switch>
						</Router>
					</InnerContent>
				</GlobalContainer>
			</ThemeProvider>
		</>
	);
}

export default App;
