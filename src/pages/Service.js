import React from "react";
import Layout from "../components/layout";
import HeroImg from "../components/HeroImg";
import ServiceSection from "../components/ServiceSection";
import InfoSection from "../components/InfoSection";

import { servicePageData, servicesData } from "../data/servicePageData";

const Service = () => {
	return (
		<Layout>
			<HeroImg title="Our Services" />
			<ServiceSection servicesData={servicesData} />
			<InfoSection {...servicePageData} />
		</Layout>
	);
};

export default Service;
