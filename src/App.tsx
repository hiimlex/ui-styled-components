import React, { useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import Card from './components/Card';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './components/Header';
import Doc from './components/Doc';
import deleteAllCookies from './utils/deleteCookies';

function App() {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	useEffect(() => {
		deleteAllCookies();
	}, []);

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} title={theme.title} />
				<Doc>
					<Card
						title="Title of the card."
						subtitle="Subtitle of the card."
						actions
						confirmButton
						confirmButtonText="Ok"
						contentText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime
						officiis quo quidem qui! Quasi labore repellendus odio cumque quis aut
						quo possimus atque id vero dolores odit, a voluptas?"
					></Card>
				</Doc>
			</ThemeProvider>
		</div>
	);
}

export default App;
