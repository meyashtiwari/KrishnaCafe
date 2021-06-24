import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice } from "react-icons/fa";

const Header = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	return (
		<Nav scrollNav={scrollNav}>
			<NavLink to="/">Krishna Cafe</NavLink>
			<NavIcon onClick={toggle}>
				<p>Menu</p>
				<Bars />
			</NavIcon>
		</Nav>
	);
};

const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? "#e31837" : "transparent")};
	z-index: 100;
	height: 80px;
	display: flex;
	justify-content: center;
	font-weight: 700;
	position: sticky;
	top: 0;
	width: 100%;
`;

const NavLink = styled(Link)`
	color: #fff;
	font-size: 2rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;

	@media screen and (max-width: 400px) {
		position: absolute;
		top: 10px;
		left: 25px;
	}
`;

const NavIcon = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	color: #fff;

	p {
		transform: translate(-175%, 100%);
		font-weight: bold;
	}
`;

const Bars = styled(FaPizzaSlice)`
	font-size: 2rem;
	transform: translate(-50%, -15%);
`;

export default Header;
