//Import next components
import Link from "next/link";
//Import styled components
import { NavigationMobile } from "./nav.styles";
const NavMobile = (props: {
	navElements: {
		name: string;
		url: string;
	}[];
}) => {
	return (
		<NavigationMobile>
			{props.navElements.map((element) => (
				<Link key={element.name} href={element.url}>
					{element.name}
				</Link>
			))}
		</NavigationMobile>
	);
};

export default NavMobile;
