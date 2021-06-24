import React, { useState, useEffect } from "react";

import { useQuery } from "urql";

import ProductsSection from "./ProductsSection";
import Product from "./Product";
import Loading from "./Loading";

const LoadProducts = ({ Query, Title }) => {
	const [result] = useQuery({
		query: Query,
	});

	const { data, fetching, error } = result;
	const [products, setProducts] = useState([]);

	useEffect(() => {
		let fetchedProducts = [];
		if (!fetching && !error) {
			fetchedProducts = data.products.nodes;
		}
		setProducts(fetchedProducts);
	}, [fetching, data, error]);

	return (
		<ProductsSection title={Title}>
			{fetching && <Loading />}
			{error && <div>Error fetching products</div>}
			{products.map((data, index) => (
				<Product
					key={index}
					id={data.databaseId}
					img={data.image.sourceUrl}
					name={data.name}
					price={data.price}
					button="Add to plate"
				/>
			))}
		</ProductsSection>
	);
};

export default LoadProducts;
