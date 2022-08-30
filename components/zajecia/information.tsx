//Import State
import Link from "next/link";
import { useStateContext } from "../../lib/context";
//Import style
import { InformationContainer, BTN } from "./zajecia.styles";
type PropsType = {
	elements: {
		attributes: {
			Nazwa: string;
			Slug: string;
			Opis: string;
			DodatkowyOpis: string;
			KoncowyOpis: string;
		};
	}[];
};
const Information = (props: PropsType) => {
	const contextItems = useStateContext();
	const x = props.elements.filter(
		(element) => element.attributes.Slug === contextItems?.active
	);
	const chosenElement = x[0] ? (
		<InformationContainer>
			<h1>{x[0].attributes.Nazwa}</h1>
			<p>{x[0].attributes.Opis ? x[0].attributes.Opis : null}</p>

			{x[0].attributes.DodatkowyOpis ? (
				<p>{x[0].attributes.DodatkowyOpis}</p>
			) : null}

			{x[0].attributes.KoncowyOpis ? (
				<p>{x[0].attributes.KoncowyOpis}</p>
			) : null}

			<Link href='https://app.fitssey.com/MOVI/frontoffice'>
				<BTN>Sprawdz grafik i zapisz się!</BTN>
			</Link>
		</InformationContainer>
	) : null;
	const startElement = (
		<InformationContainer>
			<h1>{props.elements[0].attributes.Nazwa}</h1>
			<p>{props.elements[0].attributes.Opis}</p>

			{props.elements[0].attributes.DodatkowyOpis ? (
				<p>{props.elements[0].attributes.DodatkowyOpis}</p>
			) : null}

			{props.elements[0].attributes.KoncowyOpis ? (
				<p>{props.elements[0].attributes.KoncowyOpis}</p>
			) : null}

			<Link href='https://app.fitssey.com/MOVI/frontoffice'>
				<BTN>Sprawdz grafik i zapisz się!</BTN>
			</Link>
		</InformationContainer>
	);

	const components = x[0] ? chosenElement : startElement;
	return <div>{components}</div>;
};

export default Information;
