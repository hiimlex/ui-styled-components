import React from 'react';
import CardPage from './pages/CardPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Routes() {
	return (
		<Router basename="/ui-styled-components">
			<Switch>
				<Route exact path="/" component={CardPage}></Route>
			</Switch>
		</Router>
	);
}

export default Routes;
