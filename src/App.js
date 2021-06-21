import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Service from "./pages/Service";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/service" component={Service} exact />
				<Route path="/menu" component={Menu} exact />
				<Route path="/about" component={About} exact />
			</Switch>
		</Router>
	);
}

export default App;
