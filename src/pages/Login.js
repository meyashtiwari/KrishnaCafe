import * as React from "react";
import HeroImg from "../components/HeroImg";

import Layout from "../components/layout";
import SignIn from "../components/SignIn";

const Login = () => (
	<Layout>
		<HeroImg title="Login" />
		<SignIn />
	</Layout>
);

export default Login;
