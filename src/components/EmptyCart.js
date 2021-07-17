import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EmptyCartSvg from "../assets/images/svg/empty_cart.svg";

const EmptyCart = () => {
	return (
		<EmptyCartContainer>
			<EmptyCartImage src={EmptyCartSvg} />
			<EmptyCartContent>
				<EmptyCartTitle>Your plate is empty</EmptyCartTitle>
				<EmptyCartMessage>
					Looks like you haven't added anything to your cart yet
				</EmptyCartMessage>
			</EmptyCartContent>
			<HeroBtn to="/menu">Go to Menu</HeroBtn>
		</EmptyCartContainer>
	);
};

export default EmptyCart;

const EmptyCartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: -10px;
	margin-bottom: 30px;
	border: 0;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
	letter-spacing: 0.5px;
	border-radius: 8px;
	-webkit-box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, 0.05);
	box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, 0.05);
`;

const EmptyCartImage = styled.img`
	width: 350px;
	height: 350px;
`;

const EmptyCartContent = styled.div`
	padding: 30px;
	background-color: transparent;
	text-align: center;
`;

const EmptyCartTitle = styled.h2``;

const EmptyCartMessage = styled.h4``;

const HeroBtn = styled(Link)`
	font-size: 1.4rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	text-decoration: none;
	color: #fff;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;
