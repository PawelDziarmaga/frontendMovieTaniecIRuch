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
		<NavigationMobile
			initial={{ x: "100%" }}
			animate={{ x: "0%" }}
			exit={{ x: "100%" }}
			transition={{
				x: { duration: 0.3 },
				default: { ease: "linear" },
			}}>
			{props.navElements.map((element) => (
				<Link key={element.name} href={element.url}>
					{element.name}
				</Link>
			))}
		</NavigationMobile>
	);
};

export default NavMobile;
