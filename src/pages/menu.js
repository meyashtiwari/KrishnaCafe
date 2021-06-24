import React from "react";

import Layout from "../components/layout";
import HeroImg from "../components/HeroImg";
import LoadProducts from "../components/LoadProducts";

import { getAllProducts } from "../queries/getAllProducts";

const Menu = () => {
	return (
		<Layout>
			<HeroImg title="Menu" />
			<LoadProducts Query={getAllProducts} Title="Choose your own craving" />
		</Layout>
	);
};

export default Menu;
