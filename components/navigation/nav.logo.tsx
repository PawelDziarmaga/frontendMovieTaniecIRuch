//Import next components
import Link from "next/link";
import Image from "next/image";
//Import styled components
import logo from "../../assets/LOGO-NAV.png";
import { NavigationLogo } from "./nav.styles";
const NavLogo = () => {
	return (
		<Link href={"/"}>
			<NavigationLogo>
				<Image src={logo} alt='logo' width={150} height={60} />
			</NavigationLogo>
		</Link>
	);
};

export default NavLogo;
