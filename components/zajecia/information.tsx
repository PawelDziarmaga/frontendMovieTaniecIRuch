//Import State
import { useStateContext } from "../../lib/context";
//Import style
import { ChoiceContainer } from "./zajecia.styles";
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
		<div>
			<h1>{x[0].attributes.Nazwa}</h1>
			<p>{x[0].attributes.Opis ? x[0].attributes.Opis : null}</p>
			<p>
				{x[0].attributes.DodatkowyOpis
					? x[0].attributes.DodatkowyOpis
					: null}
			</p>
			<p>
				{x[0].attributes.KoncowyOpis
					? x[0].attributes.KoncowyOpis
					: null}
			</p>
		</div>
	) : null;
	const startElement = (
		<div>
			<h1>{props.elements[0].attributes.Nazwa}</h1>
			<p>{props.elements[0].attributes.Opis}</p>
			<p>
				{props.elements[0].attributes.DodatkowyOpis
					? props.elements[0].attributes.DodatkowyOpis
					: null}
			</p>
			<p>
				{props.elements[0].attributes.KoncowyOpis
					? props.elements[0].attributes.KoncowyOpis
					: null}
			</p>
		</div>
	);

	const components = x[0] ? chosenElement : startElement;
	return <div>{components}</div>;
};

export default Information;
