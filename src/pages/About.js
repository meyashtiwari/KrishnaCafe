import React from "react";
import HeroImg from "../components/HeroImg";
import Layout from "../components/layout";
import InfoSection from "../components/InfoSection";
import Team from "../components/Team";

import { aboutPageData, teamData } from "../data/aboutPageData";

const About = () => {
	return (
		<Layout>
			<HeroImg title="About us" />
			<InfoSection {...aboutPageData} />
			<Team teamData={teamData} />
		</Layout>
	);
};

export default About;
