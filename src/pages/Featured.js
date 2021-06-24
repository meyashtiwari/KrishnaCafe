import React from "react";

import Layout from "../components/layout";
import HeroImg from "../components/HeroImg";
import LoadProducts from "../components/LoadProducts";

import { getFeaturedProducts } from "../queries/getFeaturedProducts";

const Featured = () => {
	return (
		<Layout>
			<HeroImg title="Today's Specials" />
			<LoadProducts Query={getFeaturedProducts} Title="Try our favourites" />
		</Layout>
	);
};

export default Featured;
