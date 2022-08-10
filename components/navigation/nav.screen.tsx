//Import next components
import Link from "next/link";
//Import styled components
import { NavigationScreen } from "./nav.styles";
const NavScreen = (props: {
	navElements: {
		name: string;
		url: string;
	}[];
}) => {
	return (
		<NavigationScreen>
			{props.navElements.map((element) => (
				<Link key={element.name} href={`/${element.url}`}>
					{element.name}
				</Link>
			))}
		</NavigationScreen>
	);
};

export default NavScreen;
