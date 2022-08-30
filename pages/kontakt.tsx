//Import next components
import Link from "next/link";
import Head from "next/head";
//import data from strapi
import { useQuery } from "urql";
import { KONTAKT } from "../lib/query";
//import components
import Adress from "../components/kontakt/Adress";
import Map from "../components/kontakt/Map";
import SocialMedia from "../components/kontakt/SocialMedia";
import HeaderPages from "../components/headerPages/headerPages";

const Kontakt = () => {
	//Fetch result from strapi
	const [result] = useQuery({ query: KONTAKT });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... </p>;
	const elements = data.kontakt.data.attributes;

	return (
		<div>
			<Head>
				<title>MOVI taniec i ruch</title>
			</Head>
			<main>
				<HeaderPages
					title={elements.Naglowek}
					img={elements.Tlo.data.attributes.formats.medium.url}
				/>
				<Adress elements={elements} />
				<Map />
				<SocialMedia elements={elements} />
			</main>
		</div>
	);
};

export default Kontakt;
