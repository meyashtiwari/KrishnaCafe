import Layout from "../components/layout";
import Hero from "../components/Hero";
import LoadProducts from "../components/LoadProducts";
import { getProducts } from "../queries/getProducts";
import FeaturedSection from "../components/FeaturedSection";

const HomePage = () => {
	return (
		<Layout>
			<Hero />
			<LoadProducts Query={getProducts} Title="Breakfast and Snacks" />
			<FeaturedSection />
		</Layout>
	);
};

export default HomePage;
