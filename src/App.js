import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Menu from './pages/Menu';
import Service from './pages/Service';
import Featured from './pages/Featured';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/service" component={Service} exact />
				<Route path="/menu" component={Menu} exact />
				<Route path="/about" component={About} exact />
				<Route path="/featured" component={Featured} exact />
				<Route path="/plate" component={Cart} exact />
				<Route path="/login" component={Login} exact />
				<Route path="/signup" component={Signup} exact />
			</Switch>
		</Router>
	);
}

export default App;
