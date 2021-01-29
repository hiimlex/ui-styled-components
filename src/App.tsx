import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import Card from './components/Card';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './components/Header';
import Doc from './components/Doc';

function App() {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} title={theme.title} />
				<Doc>
					<Card
						title='Titulo do card'
					></Card>
				</Doc>
			</ThemeProvider>
		</div>
	);
}

export default App;
