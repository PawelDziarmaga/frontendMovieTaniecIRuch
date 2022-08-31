//Import next components
import Link from "next/link";
//Import styled components
import { NavigationLogo } from "./nav.styles";
//import data from strapi
import { useQuery } from "urql";
import { LOGO } from "../../lib/query";
const NavLogo = () => {
	//Fetch result from strapi
	const [result] = useQuery({ query: LOGO });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... </p>;
	const elements =
		data.nawigacja.data.attributes.Logo.data.attributes.formats.thumbnail;

	return (
		<Link href={"/"}>
			<NavigationLogo>
				<img src={elements.url} alt={elements.name} />
			</NavigationLogo>
		</Link>
	);
};

export default NavLogo;
