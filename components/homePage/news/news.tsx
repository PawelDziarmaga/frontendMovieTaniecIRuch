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

const News = () => {
	//Fetch result from strapi
	const [result] = useQuery({ query: STRONA_GLOWNA });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;
	const elements = data.stronaGlowna.data.attributes;
	console.log(elements);
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
		console.log(chosenElement);
		chosenElement[0].classList.add("active");
		chosenElement[1].classList.add("active");
	};

	const buttons = elements?.Aktualnosci.data.map(
		(element: { attributes: { formats: { small: { name: string } } } }) => (
			<Buttons
				onClick={(e: any) => {
					manualClick(e.target.classList[3]);
				}}
				className={`news__navigation-btn ${element.attributes.formats.small.name}`}
				key={element.attributes.formats.small.name}></Buttons>
		)
	);
	const newsIMG = elements?.Aktualnosci.data.map(
		(element: {
			attributes: { formats: { small: { name: string; url: string } } };
		}) => (
			<Images
				className={`news__slide ${element.attributes.formats.small.name}`}
				key={element.attributes.formats.small.name}>
				<img
					src={element.attributes.formats.small.url}
					alt={element.attributes.formats.small.name}></img>
			</Images>
		)
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
