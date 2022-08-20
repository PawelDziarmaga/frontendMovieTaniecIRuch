//Import State
import { useStateContext } from "../../lib/context";
//Import style
import { ChoiceContainer } from "./zajecia.styles";
type PropsType = {
	elements: { attributes: { Nazwa: string; Slug: string; Opis: string } }[];
};

const Information = (props: PropsType) => {
	const contextItems = useStateContext();
	console.log(props.elements);
	const x = props.elements.filter(
		(element) => element.attributes.Nazwa === contextItems?.active
	);
	console.log(x);
	return (
		<div>
			<h1>{x[0].attributes.Nazwa}</h1>
			<p>{x[0].attributes.Opis}</p>
		</div>
	);
};

export default Information;
