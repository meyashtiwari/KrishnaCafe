import React from "react";
import styled from "styled-components";

const ServiceSection = ({ servicesData }) => {
	return (
		<>
			<ServicesContainer id="services">
				<ServicesH1>What do we offer?</ServicesH1>
				<ServicesWrapper>
					{servicesData.map((data, index) => {
						return (
							<ServicesCard key={index}>
								<ServicesIcon src={data.icon} />
								<ServicesH2>{data.heading}</ServicesH2>
								<ServicesP>{data.description}</ServicesP>
							</ServicesCard>
						);
					})}
				</ServicesWrapper>
			</ServicesContainer>
		</>
	);
};

export default ServiceSection;

const ServicesContainer = styled.div`
	height: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #150f0f;

	@media screen and (max-width: 768px) {
		height: 1000px;
	}

	@media screen and (max-width: 480px) {
		height: 1500px;
	}
`;

const ServicesWrapper = styled.div`
	max-width: 100%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 0.8fr 0.8fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

const ServicesCard = styled.div`
	background: #ffc500;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	height: 350px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

const ServicesIcon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

const ServicesH1 = styled.h1`
	font-size: 2.5rem;
	color: #fff;
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

const ServicesH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 15px;
	color: #150f0f;
`;

const ServicesP = styled.p`
	font-size: 1rem;
	text-align: center;
	color: #150f0f;
`;
