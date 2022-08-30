import React, { useRef, useEffect, useState } from "react";
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
//framermotion - animation
const { AnimatePresence } = require("framer-motion");
let activeSwiper = false;
const News = () => {
	const [vievNews, setVievNews] = useState(0);
	const [leftOrRight, setLeftOrRight] = useState(false);
	// ative interval
	useEffect(() => {
		const interval = setInterval(() => {
			setLeftOrRight(false);
			autoSwiper();
		}, 10000);
		return () => clearInterval(interval);
	}, []);
	// sctive swiper
	useEffect(() => {
		if (activeSwiper === false) {
			new Swiper();

			document.addEventListener("swipeLeft", () => {
				setLeftOrRight(false);

				manualSwiper({ move: "left", abc: setVievNews });
			});
			document.addEventListener("swipeRight", () => {
				setLeftOrRight(true);

				manualSwiper({ move: "right", abc: setVievNews });
			});
			activeSwiper = true;
		}
	});
	// function for automatic swiping of news
	const autoSwiper = function () {
		/********************* FIND ALL BUTTONS ************/
		const btms: HTMLCollectionOf<Element> = document.getElementsByClassName(
			"news__navigation-btn"
		);

		/* DEFINE EMPTY ARRAY FOR SERCHING ACTIVE BUTTON ***/
		let classes: any[] = [];

		/* FIND BUTTON WIDTH CLASS === active ***/
		if (btms.length > 0) {
			for (let i = 0; i < btms.length; i++) {
				classes.push(btms[i].classList[4]);
			}
			/* clases return ['active', undefined, undefined]*/

			let x = classes.findIndex((clas) => clas === "active");
			/* x return index of active element*/

			/* return active clases from all elements*/
			for (let i = 0; i < btms.length; i++) {
				btms[i].classList.remove("active");
			}

			if (x >= btms.length - 1) {
				x = 0;
			} else {
				x++;
			}

			btms[x].classList.add("active");
			setVievNews(x);
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

		const btms = document.getElementsByClassName("news__navigation-btn");
		for (let i = 0; i < btms.length; i++) {
			btms[i].classList.remove("active");
		}
		const chosenElement =
			document.getElementsByClassName(chosenElementClass);

		chosenElement[0].classList.add("active");
		setVievNews(Number(chosenElementClass));
	};

	//Generating buttons
	let firstBTNElement = false;
	let numberOfElement = 0;
	const buttons = elements?.Aktualnosci.data.map(
		(element: { attributes: { formats: { small: { name: string } } } }) => {
			const classes = firstBTNElement
				? `${numberOfElement} news__navigation-btn `
				: `${numberOfElement} news__navigation-btn active`;
			firstBTNElement = true;
			numberOfElement = numberOfElement + 1;
			return (
				<Buttons
					onClick={(e: any) => {
						manualClick(e.target.classList[2]);
					}}
					className={classes}
					key={element.attributes.formats.small.name}></Buttons>
			);
		}
	);
	//Generating news

	const newsIMG = elements?.Aktualnosci.data.map(
		(element: {
			attributes: { formats: { small: { name: string; url: string } } };
		}) => {
			return (
				<Images
					className='news__slide'
					key={element.attributes.formats.small.name}
					initial={
						leftOrRight
							? { x: "-1000%", width: "0%", opacity: -1 }
							: { x: "1000%", width: "0%", opacity: -1 }
					}
					animate={{ x: "0%", width: "auto", opacity: 1 }}
					exit={
						leftOrRight
							? { x: "1000%", width: "0%", opacity: -1 }
							: { x: "-1000%", width: "0%", opacity: -1 }
					}
					transition={{
						delay: 0,

						duration: 0.3,
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
				<NewsIMGContainer>
					<AnimatePresence>{newsIMG[vievNews]}</AnimatePresence>
				</NewsIMGContainer>
				<ButtonsContainer>{buttons}</ButtonsContainer>
			</Container>
		</NewsStyle>
	);
};

export default News;
