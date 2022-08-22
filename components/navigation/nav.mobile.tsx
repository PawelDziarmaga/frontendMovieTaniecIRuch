//Import next components
import Link from "next/link";
//Import styled components
import { NavigationMobile } from "./nav.styles";

const NavMobile = (props: {
	setActiveMobile: React.Dispatch<React.SetStateAction<boolean>>;
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
				<div
					key={element.name}
					onClick={() => props.setActiveMobile(false)}>
					<Link href={element.url}>{element.name}</Link>
				</div>
			))}
		</NavigationMobile>
	);
};

export default NavMobile;
