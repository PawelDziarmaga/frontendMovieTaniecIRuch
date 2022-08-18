//import data from strapi
import { useQuery } from "urql";
import { KONTAKT } from "../../lib/query";
//import style
import { Logos } from "./footer.styles";

function Cooperation() {
	//Fetch result from strapi
	const [result] = useQuery({ query: KONTAKT });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;
	if (fetching) return <p>Loading...</p>;
	const AplicationLogos = data.kontakt.data.attributes.Wspolprace;

	return (
		<Logos className='cooperation-box'>
			{AplicationLogos.data.map(
				(item: {
					attributes: {
						formats: { small: { name: string; url: string } };
					};
				}) => {
					return (
						<img
							key={item.attributes.formats.small.name}
							src={item.attributes.formats.small.url}
							alt={item.attributes.formats.small.name}
						/>
					);
				}
			)}
		</Logos>
	);
}

export default Cooperation;
