//import strapi vomponents
import Link from "next/link";
//Import State
import { useStateContext } from "../../../lib/context";
//import data from strapi
import { useQuery } from "urql";
import { TANIEC } from "../../../lib/query";
//import styles
import { Container, Element, BackGround, H1 } from "./taniecLista.styles";

const TaniecLista = () => {
	const contextItems = useStateContext();
	//Fetch result from strapi
	const [result] = useQuery({ query: TANIEC });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;
	const elements = data.taniecs.data;

	const createElements = elements.map(
		(element: {
			attributes: {
				Nazwa: string;
				Slug: string;
				Zdjecie: {
					data: {
						attributes: { formats: { small: { url: string } } };
					};
				};
			};
		}) => {
			return (
				<div
					key={element.attributes.Slug}
					onClick={() => {
						contextItems?.setActive(element.attributes.Slug);
					}}>
					<Link href='/zajecia/taniec'>
						<Element>
							<BackGround className='BackGround'></BackGround>
							<H1>{element.attributes.Nazwa}</H1>

							<img
								src={
									element.attributes.Zdjecie.data.attributes
										.formats.small.url
								}
								alt={element.attributes.Nazwa}></img>
						</Element>
					</Link>
				</div>
			);
		}
	);
	return <Container>{createElements}</Container>;
};

export default TaniecLista;
