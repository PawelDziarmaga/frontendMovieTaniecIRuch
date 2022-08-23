import type { NextPage } from "next";
import Head from "next/head";

//import components
import Header from "../components/homePage/header/header";
import News from "../components/homePage/news/news";
import Facebook from "../components/homePage/facebook/facebook";
import TaniecLista from "../components/homePage/taniecLista/taniecLista";
import RuchLista from "../components/homePage/ruchLista/ruchLista";
import Break from "../components/homePage/break/Break";
const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>MOVI taniec i ruch</title>
			</Head>

			<main>
				<Header />
				<News />
				<Break text='Taniec' />
				<TaniecLista />
				<Break text='Ruch' />
				<RuchLista />
			</main>
		</div>
	);
};

export default Home;
