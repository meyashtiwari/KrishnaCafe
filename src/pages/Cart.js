import * as React from "react";
import HeroImg from "../components/HeroImg";

import Layout from "../components/layout";
import ShoppingCart from "../components/ShoppingCart";

const Cart = () => (
	<Layout>
		<HeroImg title="Your Plate" />
		<ShoppingCart />
	</Layout>
);

export default Cart;
