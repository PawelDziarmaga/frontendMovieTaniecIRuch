import Head from "next/head";
//import data from strapi
import { useQuery } from "urql";
import { TANIEC, ZAJECIA } from "../../lib/query";
//import style
import styled from "styled-components";
//import components
import Choice from "../../components/zajecia/choice";
import General from "../../components/zajecia/general";
import Information from "../../components/zajecia/information";

const Onas = () => {
	//Fetch result from strapi
	const [result] = useQuery({ query: TANIEC });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... </p>;
	const elements = data.taniecs.data;

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
				<Cntainer>
					<General type={"taniec"} />
					<Choice elements={elements} />
					<Information elements={elements} />
				</Cntainer>
			</main>
		</div>
	);
};

export default Onas;

const Cntainer = styled.div`
	margin: 0 10%;
`;
