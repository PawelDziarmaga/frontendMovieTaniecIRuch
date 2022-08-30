import { useState } from "react";
//Import next components
import Link from "next/link";
//import data from strapi
import { useQuery } from "urql";
import { STRONA_GLOWNA } from "../../../lib/query";
//Import styled components
import {
	HeaderStyle,
	BackgroundIMG,
	Content,
	ContainerBTN,
	Arrow,
	BTN,
} from "./header.styles";

const Header = () => {
	//Fetch result from strapi
	const [result] = useQuery({ query: STRONA_GLOWNA });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... </p>;
	const elements = data.stronaGlowna.data.attributes;

	return (
		<HeaderStyle>
			<BackgroundIMG
				img={
					elements.ZdjecieWTle.data.attributes.formats.medium.url
				}></BackgroundIMG>
			<Content>
				<h1>{elements.Naglowek}</h1>
				<ContainerBTN>
					<Link href='/Onas'>
						<BTN>
							<p>O nas</p>
							<span>»</span>
						</BTN>
					</Link>
					<Link href='https://app.fitssey.com/MOVI/frontoffice'>
						<BTN>
							<p>Grafik</p>
							<span>»</span>
						</BTN>
					</Link>
				</ContainerBTN>

				<Arrow>»</Arrow>
			</Content>
		</HeaderStyle>
	);
};

export default Header;
