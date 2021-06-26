import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/Store";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import styled from "styled-components";

const Product = ({ id, img, name, price, button }) => {
	const [state, dispatch] = useContext(Context);
	const [cartButtonIsActive, setCartButtonIsActive] = useState(false);
	let countOfProductsAdded = useRef(0);

	useEffect(() => {
		countOfProductsAdded.current = state.cart.filter((v) => v === id).length;
		if (countOfProductsAdded.current > 0) {
			setCartButtonIsActive(true);
		} else {
			setCartButtonIsActive(false);
		}
	}, [state, id]);

	const addToCart = () => {
		dispatch({ type: "ADD_TO_CART", payload: id });
	};

	const removeFromCart = () => {
		if (countOfProductsAdded.current > 0) {
			dispatch({ type: "REMOVE_FROM_CART", payload: id });
			countOfProductsAdded.current--;
		}
	};

	return (
		<ProductCard>
			<ProductImg src={img} />
			<ProductInfo>
				<ProductTitle>{name}</ProductTitle>
				<ProductPrice>{price}</ProductPrice>
				{cartButtonIsActive && (
					<CartButtonContainer>
						<RemoveItemButton onClick={removeFromCart}>
							<RemoveCircle fontSize="large" />
						</RemoveItemButton>
						<AddItemButton onClick={addToCart}>
							<AddCircle fontSize="large" />
						</AddItemButton>
					</CartButtonContainer>
				)}
				{!cartButtonIsActive && <ProductButton onClick={addToCart}>{button}</ProductButton>}
			</ProductInfo>
		</ProductCard>
	);
};

export default Product;

const ProductCard = styled.div`
	margin: 0 2rem;
	line-height: 2;
	width: 300px;
`;

const ProductImg = styled.img`
	height: 300px;
	min-width: 300px;
	max-width: 100%;
	box-shadow: 8px 8px #fdc500;
`;

const ProductTitle = styled.h2`
	font-weight: 400;
	font-size: 1.5rem;
`;

const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	text-align: center;
`;

const ProductPrice = styled.p`
	margin-bottom: 1rem;
	font-size: 2rem;
`;

const ProductButton = styled.button`
	font-size: 1rem;
	padding: 1rem 2rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2 ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;

const BaseButton = styled.button`
	padding: 0.6rem 2rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2 ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;

const AddItemButton = styled(BaseButton)``;

const RemoveItemButton = styled(BaseButton)`
	margin-right: 1rem;
`;

const CartButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
