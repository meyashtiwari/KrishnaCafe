import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterDesc>
				<h1>Krishna Cafe</h1>
				<p>© 2021 | All rights reserved.</p>
			</FooterDesc>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.div`
	padding: 1rem calc((100vw - 1100px) / 2);
	color: #fff;
	background: #0d0909;
	position: absolute;
	bottom: 0;
	width: 100%;
`;
const FooterDesc = styled.div`
	padding: 0 2rem;
	text-align: center;

	h1 {
		margin-bottom: 2rem;
		color: #ffc500;
	}

	@media screen and (max-width: 400px) {
		padding: 1rem;
	}
`;
