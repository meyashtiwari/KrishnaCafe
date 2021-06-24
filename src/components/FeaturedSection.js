import React from "react";
import styled from "styled-components";
import featuredBg from "../assets/images/featured-bg.jpg";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
	return (
		<FeaturedContainer>
			<h1>Today's Specials</h1>
			<p>Try something from our most popular items</p>
			<FeaturedButton to="/featured">Order Now</FeaturedButton>
		</FeaturedContainer>
	);
};

export default FeaturedSection;

const FeaturedContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
		url(${featuredBg});
	height: 100vh;
	max-height: 500px;
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	padding: 0 1rem;

	h1 {
		font-size: clamp(3rem, 5vw, 5rem);
	}

	p {
		margin-bottom: 1rem;
		font-size: clamp(1rem, 3vw, 2rem);
	}
`;

const FeaturedButton = styled(Link)`
	font-size: 1.4rem;
	padding: 0.6rem 3rem;
	border: none;
	background: #ffc500;
	color: #000;
	transition: 0.2s ease-out;
	text-decoration: none;

	&:hover {
		color: #fff;
		background: #e31837;
		transition: 0.2s ease-out;
		cursor: pointer;
	}
`;
