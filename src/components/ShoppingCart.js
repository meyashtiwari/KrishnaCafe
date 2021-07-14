import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { addItemToCart } from "../queries/addItemToCart";
import { useMutation } from "urql";

import { Context } from "../store/Store";
import Loading from "./Loading";

const ShoppingCart = () => {
	const [state, dispatch] = useContext(Context);
	const [cartItems, setCartItems] = useState([]);

	const [result, updateCart] = useMutation({
		query: addItemToCart,
		variables: { id: 61 },
	});

	const { data, fetching, error } = result;

	useEffect(() => {
		let fetchedItems = [];
		if (!fetching && !error) {
			// fetchedProducts = data.products.nodes;
			console.log(result);
		}
		setCartItems(fetchedItems);
	}, [fetching, data, error]);

	return (
		<ShoppingCartConatiner>
			<Heading>Items in your Plate</Heading>
			<Cart>
				<Products>
					{/* {fetching && <Loading />}
					{error && <div>Error fetching products</div>}
					{cartItems.map((data, index) => (
						<Product key={index}>
							<ProductImg src={data.image.sourceUrl} />
							<ProductInfo>
								<ProductName>{data.name}</ProductName>
								<ProductPrice>{data.price}</ProductPrice>
								<ProductQuantity>
									Qty: <Quantity type="number" min="1" max="9" placeholder="1" />
								</ProductQuantity>
								<ProductRemove>
									<StyledDeleteForeverIcon />
									<Remove>Remove</Remove>
								</ProductRemove>
							</ProductInfo>
						</Product>
					))} */}
				</Products>
				<CartTotal>
					<TotalPrice>
						<span>Total Price</span>
						<span>3000</span>
					</TotalPrice>
					<NumberOfItems>
						<span>Number of Items</span>
						<span>2</span>
					</NumberOfItems>
					<CheckoutButton>Checkout</CheckoutButton>
				</CartTotal>
			</Cart>
		</ShoppingCartConatiner>
	);
};

export default ShoppingCart;

const ShoppingCartConatiner = styled.div`
	max-width: 1200px;
	margin: 0 auto;

	@media screen and (max-width: 1220px) {
		max-width: 95%;
	}
`;

const Heading = styled.h1`
	padding: 20px 0;
`;

const Cart = styled.div`
	display: flex;
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

const Products = styled.div`
	flex: 0.75;
`;

const Product = styled.div`
	display: flex;
	width: 100%;
	height: 200px;
	overflow: hidden;
	border: 1px solid silver;
	margin-bottom: 10px;

	@media screen and (max-width: 700px) {
		height: 220px;
	}
`;

const ProductImg = styled.img`
	width: 300px;
	height: 200px;
	object-fit: cover;

	&:hover {
		transform: scale(1.04);
	}

	@media screen and (max-width: 700px) {
		height: 150px;
		width: 200px;
	}
`;

const ProductInfo = styled.div`
	padding: 20px;
	width: 100%;
	position: relative;
`;

const ProductName = styled.h2`
	margin-bottom: 20px;

	@media screen and (max-width: 700px) {
		margin-bottom: 10px;
	}
`;

const ProductPrice = styled.h4`
	margin-bottom: 20px;

	@media screen and (max-width: 700px) {
		margin-bottom: 10px;
	}
`;
const ProductQuantity = styled.p``;

const Quantity = styled.input`
	width: 40px;
	padding: 5px;
	text-align: center;
`;

const ProductRemove = styled.p`
	position: absolute;
	bottom: 20px;
	right: 20px;
	padding: 7px 25px;
	background-color: #e31837;
	color: white;
	cursor: pointer;
	border-radius: 5px;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;

const StyledDeleteForeverIcon = styled(DeleteForeverIcon)`
	transform: translate(0%, 22%);
	margin-right: 5px;
`;

const Remove = styled.span`
	@media screen and (max-width: 700px) {
		display: none;
	}
`;

const CartTotal = styled.div`
	flex: 0.25;
	margin-left: 20px;
	margin-bottom: 10px;
	padding: 20px;
	height: 240px;
	border: 1px solid silver;
	border-radius: 5px;

	@media screen and (max-width: 900px) {
		margin-left: 0;
		margin-bottom: 20px;
	}
`;

const TotalPrice = styled.p`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
	font-size: 20px;
`;

const NumberOfItems = styled.p`
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
	font-size: 20px;
`;

const CheckoutButton = styled(Link)`
	font-size: 1.2rem;
	display: block;
	text-align: center;
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
