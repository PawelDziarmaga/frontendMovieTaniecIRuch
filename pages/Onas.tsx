import Head from "next/head";
//import data from strapi
import { useQuery } from "urql";
import { ONAS } from "../lib/query";

import styled from "styled-components";

const Onas = () => {
	//Fetch result from strapi
	const [result] = useQuery({ query: ONAS });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;
	const elements = data.onasAbout.data.attributes;

	return (
		<div>
			<Head>
				<title>MOVI taniec i ruch</title>
			</Head>
			<main>
				<AboutPage>
					{elements.AkapitPierwszy ? (
						<p>{elements.AkapitPierwszy}</p>
					) : null}
					{elements.AkapitDrugi ? (
						<p>{elements.AkapitDrugi}</p>
					) : null}
					{elements.AkapitTrzeci ? (
						<p>{elements.AkapitTrzeci}</p>
					) : null}
				</AboutPage>
			</main>
		</div>
	);
};

export default Onas;

const AboutPage = styled.div`
	margin: 5vh 20%;
	font-size: 25px;
	@media screen and (max-width: 1200px) {
		margin: 5vh 10%;
	}
	@media screen and (max-width: 900px) {
		font-size: 20px;
	}
	@media screen and (max-width: 700px) {
		margin: 5vh 5%;
		font-size: 15px;
	}
	p {
		text-align: justify;
		padding: 3vh 0;
		&:first-child {
			border-bottom: 5px solid var(--primary);
		}
	}
`;
