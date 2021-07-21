import * as React from "react";
import HeroImg from "../components/HeroImg";

import Layout from "../components/layout";
import SignUp from "../components/SignUp";

const Signup = () => (
	<Layout>
		<HeroImg title="Create Account" />
		<SignUp />
	</Layout>
);

export default Signup;
