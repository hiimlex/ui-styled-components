import React, { useEffect } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NotFound from './pages/NotFound';
import Routes from './routes';
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
						<Header toggleTheme={toggleTheme} />
						<Routes />
					</InnerContent>
				</GlobalContainer>
				<NotFound></NotFound>
			</ThemeProvider>
		</>
	);
}

export default App;
