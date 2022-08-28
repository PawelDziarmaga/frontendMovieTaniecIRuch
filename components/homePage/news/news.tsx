import React, { useRef, useEffect } from "react";
//impoer state
import { useQuery } from "urql";
import { STRONA_GLOWNA } from "../../../lib/query";
//import styles
import {
	NewsStyle,
	Background,
	Container,
	ButtonsContainer,
	Buttons,
	NewsIMGContainer,
	Images,
} from "./news.styles";
//import tools
import Swiper from "./swiper";
import { manualSwiper } from "./manualSwiper";
let activeSwiper = false;
const News = () => {
	// ative interval
	useEffect(() => {
		const interval = setInterval(() => {
			autoSwiper();
		}, 12000);
		return () => clearInterval(interval);
	}, []);
	// sctive swiper
	useEffect(() => {
		if (activeSwiper === false) {
			new Swiper();

			document.addEventListener("swipeLeft", () => {
				manualSwiper("left");
			});
			document.addEventListener("swipeRight", () => {
				manualSwiper("right");
			});
			activeSwiper = true;
		}
	});
	// function for automatic swiping of news
	const autoSwiper = function () {
		/********************* FIND ALL BUTTONS ************/
		const btms = document.getElementsByClassName("news__navigation-btn");

		/********************* FIND ALL SLIDES ************/
		const slides = document.getElementsByClassName("news__slide");

		/* DEFINE EMPTY ARRAY FOR SERCHING ACTIVE BUTTON ***/
		let classes: string[] = [];

		/* FIND BUTTON WIDTH CLASS === active ***/
		if (btms.length > 0) {
			for (let i = 0; i < btms.length; i++) {
				classes.push(btms[i].classList[4]);
			}

			let x = classes.findIndex((clas) => clas === "active");
			/* x return index of active element*/

			/* return active clases from all elements*/
			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				btms[i].classList.remove("active");
			}

			if (x >= btms.length - 1) {
				x = 0;
			} else {
				x++;
			}

			slides[x].classList.add("active");
			btms[x].classList.add("active");
		}
	};
	//Fetch result from strapi
	const [result] = useQuery({ query: STRONA_GLOWNA });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;
	const elements = data.stronaGlowna.data.attributes;

	//Support for the change buttons
	const manualClick = function (chosenElementClass: string) {
		/*const chosenElementClass = event.target.classList[1];*/
		const slides = document.getElementsByClassName("news__slide");
		const btms = document.getElementsByClassName("news__navigation-btn");
		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
			btms[i].classList.remove("active");
		}
		const chosenElement =
			document.getElementsByClassName(chosenElementClass);

		chosenElement[0].classList.add("active");
		chosenElement[1].classList.add("active");
	};
	//Generating buttons
	let firstBTNElement = false;
	const buttons = elements?.Aktualnosci.data.map(
		(element: { attributes: { formats: { small: { name: string } } } }) => {
			const classes = firstBTNElement
				? `news__navigation-btn ${element.attributes.formats.small.name}`
				: `news__navigation-btn ${element.attributes.formats.small.name} active`;
			firstBTNElement = true;
			return (
				<Buttons
					onClick={(e: any) => {
						manualClick(e.target.classList[3]);
					}}
					className={classes}
					key={element.attributes.formats.small.name}></Buttons>
			);
		}
	);
	//Generating news
	let firstIMGElement = false;
	const newsIMG = elements?.Aktualnosci.data.map(
		(element: {
			attributes: { formats: { small: { name: string; url: string } } };
		}) => {
			const classes = firstIMGElement
				? `news__slide ${element.attributes.formats.small.name}`
				: `news__slide ${element.attributes.formats.small.name} active`;
			firstIMGElement = true;
			return (
				<Images
					className={classes}
					key={element.attributes.formats.small.name}
					initial={{ x: "100%" }}
					animate={{ x: "0%" }}
					exit={{ x: "100%" }}
					transition={{
						x: { duration: 0.3 },
						default: { ease: "linear" },
					}}>
					<img
						src={element.attributes.formats.small.url}
						alt={element.attributes.formats.small.name}></img>
				</Images>
			);
		}
	);

	return (
		<NewsStyle>
			<Background
				img={
					elements.Tlo.data.attributes.formats.medium.url
				}></Background>
			<Container>
				<NewsIMGContainer>{newsIMG}</NewsIMGContainer>
				<ButtonsContainer>{buttons}</ButtonsContainer>
			</Container>
		</NewsStyle>
	);
};

export default News;
