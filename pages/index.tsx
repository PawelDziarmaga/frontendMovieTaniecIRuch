import type { NextPage } from "next";
import Head from "next/head";
//import data from strapi
import { useQuery } from "urql";
import { STRONA_GLOWNA } from "../lib/query";
//import components
import Header from "../components/homePage/header";
const Home: NextPage = () => {
	//Fetch result from strapi
	const [result] = useQuery({ query: STRONA_GLOWNA });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;
	const elements = data;

	return (
		<div>
			<Head>
				<title>MOVI taniec i ruch</title>
				<meta
					name='Description'
					content='MOVI to nowe miejsce na tanecznej i sportowej mapie Śląska. Tworzymy je z myślą o wszystkich tych, którzy chcą rozpocząć lub kontynuować swoją taneczną przygodę, a także zadbać o swoje zdrowie i ciało'
				/>
				<meta
					name='Keywords'
					content='MOVI, Taniec, Ruch, Szkoła, Szkoła Tańca, Taniec Towarzyski, Taniec Użytkowy, Latino, Balet, Techniki Tańca klasycznego, Taniec Współczesny, Zajęcia ruchowe dla dzieci, Fitness, Stretchung, Pilates, Joga, TBC, STEP, Body Shape, BPU'
				/>
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
			</Head>

			<main>
				<Header />
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;
