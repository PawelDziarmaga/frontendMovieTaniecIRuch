//import data from strapi
import { useQuery } from "urql";
import { ZAJECIA } from "../../lib/query";

import { GeneralContainer } from "./zajecia.styles";

const General = (props: { type: string }) => {
	//Fetch result from strapi
	const [result] = useQuery({ query: ZAJECIA });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;
	const elements = data.zajecia.data.attributes;

	return (
		<GeneralContainer>
			<img
				src={elements.TaniecIMG.data.attributes.formats.small.url}
				alt={
					elements.TaniecIMG.data.attributes.formats.small.title
				}></img>
			<div>
				<div>
					<p>{data.zajecia.data.attributes.AkapitTaniec}</p>
				</div>
			</div>
		</GeneralContainer>
	);
};

export default General;
