import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { addItemToCart } from "../queries/addItemToCart";
import { useMutation } from "urql";

import { Context } from "../store/Store";
import Loading from "./Loading";
import EmptyCart from "./EmptyCart";

const ShoppingCart = () => {
	const [state, dispatch] = useContext(Context);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const [cartIsEmpty, setCartIsEmpty] = useState(true);

	let items = [];
	for (let itemsInCart of state.cart) {
		if (itemsInCart[1] > 0) {
			items.push({ productId: itemsInCart[0], quantity: itemsInCart[1] });
		}
	}
	function toObject(arr) {
		var rv = {};
		for (var i = 0; i < arr.length; ++i) rv[i] = arr[i];
		return rv;
	}
	const itemsObject = toObject(items);

	const [result, updateCart] = useMutation(addItemToCart);

	useEffect(() => {
		const variables = { items: itemsObject, clientID: "56" };
		updateCart(variables).then((result) => {
			if (result.error) {
				console.log(result.error);
				setCartIsEmpty(true);
			} else {
				let fetchedItems = result.data.addCartItems.cart.contents.nodes;
				setCartItems(fetchedItems);
				setCartIsEmpty(false);
				setTotalItems(result.data.addCartItems.cart.contents.itemCount);
				setTotalPrice(result.data.addCartItems.cart.total);
			}
		});
	}, [state]);

	return (
		<ShoppingCartConatiner>
			{result.fetching && <Loading />}
			{cartIsEmpty && <EmptyCart />}
			{!cartIsEmpty && (
				<>
					<Heading>Items in your Plate</Heading>
					<Cart>
						<Products>
							{cartItems.map((data, index) => (
								<Product key={index}>
									<ProductImg src={data.product.node.image.sourceUrl} />
									<ProductInfo>
										<ProductName>{data.product.node.name}</ProductName>
										<ProductPrice>{data.subtotal}</ProductPrice>
										<ProductQuantity>
											Qty:{" "}
											<Quantity
												type="number"
												min="1"
												max="9"
												placeholder={data.quantity}
											/>
										</ProductQuantity>
										<ProductRemove
											onClick={() => {
												dispatch({
													type: "DELETE_FROM_CART",
													payload: data.product.node.databaseId,
												});
											}}
										>
											<StyledDeleteForeverIcon />
											<Remove>Remove</Remove>
										</ProductRemove>
									</ProductInfo>
								</Product>
							))}
						</Products>
						<CartTotal>
							<TotalPrice>
								<span>Total Price</span>
								<span>{totalPrice}</span>
							</TotalPrice>
							<NumberOfItems>
								<span>Number of Items</span>
								<span>{totalItems}</span>
							</NumberOfItems>
							<CheckoutButton>Checkout</CheckoutButton>
						</CartTotal>
					</Cart>
				</>
			)}
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
	width: 250px;
	height: 250px;
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
