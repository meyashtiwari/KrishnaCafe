import React from "react";
import Layout from "../components/layout";

import { useQuery } from "urql";
import { getAllProducts } from "../queries/getAllProducts";

import ProductsSection from "../components/ProductsSection";
import Product from "../components/Product";
import HeroImg from "../components/HeroImg";

const Menu = () => {
	const [result, reexecuteQuery] = useQuery({
		query: getAllProducts,
	});

	const { data, fetching, error } = result;

	if (fetching) return <div>Loading...</div>;

	const products = data.products.nodes;
	return (
		<Layout>
			<HeroImg title="Menu" />
			<ProductsSection title="Choose your own craving">
				{products.map((data, index) => (
					<Product
						key={index}
						img={data.image.sourceUrl}
						name={data.name}
						price={data.price}
						button="Add to plate"
					/>
				))}
			</ProductsSection>
		</Layout>
	);
};

export default Menu;
