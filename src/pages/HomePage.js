import * as React from "react";

import { useQuery } from "urql";
import { getProducts } from "../queries/getProducts";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import ProductsSection from "../components/ProductsSection";
import Product from "../components/Product";

const HomePage = () => {
	const [result, reexecuteQuery] = useQuery({
		query: getProducts,
	});

	const { data, fetching, error } = result;

	if (fetching) return <div>Loading...</div>;

	const products = data.productCategories.edges[0].node.products.edges;

	return (
		<Layout>
			<Hero />
			<ProductsSection title="Breakfast and Snacks">
				{fetching && <div>Fetching Products...</div>}
				{error && <div>error</div>}
				{products.map((data, index) => (
					<Product
						key={index}
						img={data.node.image.sourceUrl}
						name={data.node.name}
						price={data.node.price}
						button="Add to plate"
					/>
				))}
			</ProductsSection>
			<Featured />
		</Layout>
	);
};

export default HomePage;
