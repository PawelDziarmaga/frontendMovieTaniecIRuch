//Import State
import { useStateContext } from "../../lib/context";
//Import style
import { ChoiceContainer } from "./zajecia.styles";

type PropsType = {
	elements: { attributes: { Nazwa: string; Slug: string } }[];
};

const Choice = (props: PropsType) => {
	const contextItems = useStateContext();

	return (
		<ChoiceContainer>
			{props.elements.length ? (
				props.elements.map(
					(element: {
						attributes: { Nazwa: string; Slug: string };
					}) => (
						<div
							onClick={() =>
								contextItems?.setActive(
									element.attributes.Nazwa
								)
							}
							key={element.attributes.Slug}>
							<h3>{element.attributes.Nazwa}</h3>
						</div>
					)
				)
			) : (
				<div>
					<h3>Brak Elementów</h3>
				</div>
			)}
		</ChoiceContainer>
	);
};

export default Choice;
