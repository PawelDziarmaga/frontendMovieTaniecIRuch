//Import next components
import Link from "next/link";
import Head from "next/head";
//import data from strapi
import { useQuery } from "urql";
import { ZAJECIA } from "../lib/query";
//import components
import HeaderPages from "../components/headerPages/headerPages";
import styled from "styled-components";
import { useStateContext } from "../lib/context";

function Zajecia() {
	const contextItems = useStateContext();
	//Fetch result from strapi
	const [result] = useQuery({ query: ZAJECIA });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... </p>;
	const elements = data.zajecia.data.attributes;

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
				<ZajeciaContainer>
					<Link href='/zajecia/taniec'>
						<TaniecContainer
							onClick={() => {
								contextItems?.setActive("stretching");
							}}>
							<Title>{elements.NaglowekTaniec}</Title>
							<Box>
								<img
									src={
										elements.TaniecIMG.data.attributes
											.formats.small.url
									}
									alt='Taniec'></img>
								<p>
									{elements.AkapitTaniec}
									<span>Więcej...</span>
								</p>
							</Box>
						</TaniecContainer>
					</Link>
					<Link href='/zajecia/ruch'>
						<RuchContainer
							onClick={() => {
								contextItems?.setActive("taniec-towarzyski");
							}}>
							<Title>{elements.NaglowekRuch}</Title>
							<Box>
								<p>
									{elements.AkapitRuch}
									<span>Więcej...</span>
								</p>
								<img
									src={
										elements.RychIMG.data.attributes.formats
											.small.url
									}
									alt='Taniec'></img>
							</Box>
						</RuchContainer>
					</Link>
				</ZajeciaContainer>
			</main>
		</div>
	);
}

export default Zajecia;
const ZajeciaContainer = styled.div`
	padding: 0 20% 5vh 20%;
	color: #606060;
	@media screen and (max-width: 1300px) {
		padding: 0 10% 5vh 10%;
	}
	@media screen and (max-width: 600px) {
		padding: 0 5% 5vh 5%;
	}
	@media screen and (max-width: 500px) {
		padding: 0 10% 5vh 10%;
	}
`;
const TaniecContainer = styled.div`
	padding-bottom: 10vh;
	border-bottom: 5px solid var(--primary);
	@media screen and (max-width: 800px) {
		padding-bottom: 5vh;
	}
	h2 {
		text-align: left;
		margin-left: 10%;
		@media screen and (max-width: 500px) {
			text-align: center;
		}
	}
	img {
		margin-right: 5%;
		@media screen and (max-width: 500px) {
			margin: 0 auto 3vh auto;
		}
	}
	span {
		font-weight: bold;
		color: #ca2a67;
		transform: scale(1.2);
	}
`;
const RuchContainer = styled.div`
	h2 {
		text-align: right;
		margin-right: 10%;
		@media screen and (max-width: 500px) {
			text-align: center;
		}
	}
	img {
		margin-left: 5%;
		@media screen and (max-width: 500px) {
			margin: 3vh auto 0 auto;
		}
	}
	span {
		font-weight: bold;
		color: #ca2a67;
		transform: scale(1.2);
	}
`;
const Title = styled.h2`
	padding: 5vh 0;
	@media screen and (max-width: 300px) {
		font-size: 12vw;
	}
`;
const Box = styled.div`
	display: flex;
	cursor: pointer;
	@media screen and (max-width: 500px) {
		display: block;
	}

	p {
		position: relative;
		text-align: justify;
		padding-bottom: 4vh;
		@media screen and (max-width: 1300px) {
			font-size: 20px;
		}
		@media screen and (max-width: 800px) {
			font-size: 16px;
		}
		@media screen and (max-width: 350px) {
			font-size: 12px;
		}
		span {
			position: absolute;
			color: $font-purple-color;
			bottom: 0;
			right: 0;
		}
	}
	img {
		width: 30%;
		height: auto;
		@media screen and (max-width: 1300px) {
			width: 40%;
		}
		@media screen and (max-width: 500px) {
			display: block;
			width: 80%;
		}
		@media screen and (max-width: 350px) {
			width: 100%;
		}
	}
`;
