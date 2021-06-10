import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home'
import about from './pages/about'
import menu from './pages/menu'
import service from './pages/service'

function App() {
  return (
    <Router>
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/service" component={service} exact />
				<Route path="/menu" component={menu} exact />
				<Route path="/about" component={about} exact />
			</Switch>
		</Router>
  );
}

export default App;
