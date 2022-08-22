import type { NextPage } from "next";
import Head from "next/head";

//import components
import Header from "../components/homePage/header/header";
import News from "../components/homePage/news/news";
import Facebook from "../components/homePage/facebook/facebook";
const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>MOVI taniec i ruch</title>
			</Head>

			<main>
				<Header />
				<News />
			</main>
		</div>
	);
};

export default Home;
