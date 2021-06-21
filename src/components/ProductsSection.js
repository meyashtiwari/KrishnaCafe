import React from "react";
import styled from "styled-components";

const ProductsSection = ({ title, children }) => {
	return (
		<ProductsContainer>
			<ProductsHeading>{title}</ProductsHeading>
			<ProductsWrapper>{children}</ProductsWrapper>
		</ProductsContainer>
	);
};

export default ProductsSection;

const ProductsContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 5rem calc((100vw - 1300px) / 2);
	background: #150f0f;
	color: #fff;
`;

const ProductsHeading = styled.h1`
	font-size: clamp(2rem, 2.5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
`;

const ProductsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
`;
