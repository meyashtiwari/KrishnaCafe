import React, { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../assets/styles/GlobalStyles.css";

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<ScrollToTop />
			<Header toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
