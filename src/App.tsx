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
				<Header toggleTheme={toggleTheme}/>
				<Doc>
					<Card
						title='Titulo do card'
						uri='https://images.unsplash.com/photo-1611738027468-129b8a3269ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
				</Doc>
			</ThemeProvider>
		</div>
	);
}

export default App;
