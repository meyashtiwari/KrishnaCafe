import React from "react";
import styled from "styled-components";
import Video from "../assets/videos/background.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg src={Video} type="video/mp4" autoPlay loop muted />
			</HeroBg>
			<HeroContent>
				<HeroItems>
					<HeroH1>WELCOME</HeroH1>
					<HeroP>The choice of your food is here</HeroP>
					<HeroBtn to="/menu">Order Now</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;

const HeroContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	color: #fff;
	padding: 0 1rem;
	position: relative;
	margin-top: -80px;
`;
const HeroBg = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 1, 1, 0.8));
	opacity: 0.6;
`;

const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	--o-object-fit: cover;
	object-fit: cover;
`;

const HeroContent = styled.div`
	z-index: 3;
	height: calc(100vh - 80px);
	max-height: 100%;
	padding: 0rem calc((100vw - 1300px) / 2);
`;

const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100vh;
	max-height: 100%;
	padding: 0;
	color: #fff;
	line-height: 1.1;
	font-weight: bold;
	text-transform: uppercase;
`;
const HeroH1 = styled.h1`
	font-size: clamp(1.5rem, 6vw, 4rem);
	margin-bottom: 1.5rem;
	letter-spacing: 3px;
	padding: 0 1rem;
`;

const HeroP = styled.p`
	font-size: clamp(1rem, 3vw, 3rem);
	margin-bottom: 2rem;
`;
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
