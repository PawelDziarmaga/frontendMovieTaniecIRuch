//Import State
import { useStateContext } from "../../lib/context";
//Import style
import { ChoiceContainer } from "./zajecia.styles";

type PropsType = {
	elements: { attributes: { Nazwa: string; Slug: string } }[];
};

const Choice = (props: PropsType) => {
	const contextItems = useStateContext();

	console.log(contextItems?.active);

	let firstIMGElement = false;
	const elements = props.elements.map(
		(element: { attributes: { Nazwa: string; Slug: string } }) => {
			const classes = firstIMGElement
				? `category-elements ${element.attributes.Slug}`
				: `category-elements ${element.attributes.Slug} active`;
			firstIMGElement = true;
			return (
				<div
					onClick={() => {
						contextItems?.setActive(element.attributes.Slug);
						contextItems?.handleClick(element.attributes.Slug);
					}}
					key={element.attributes.Slug}
					className={classes}>
					<h3>{element.attributes.Nazwa}</h3>
				</div>
			);
		}
	);
	contextItems?.handleClick(contextItems?.active);
	return <ChoiceContainer>{elements}</ChoiceContainer>;
};

export default Choice;
