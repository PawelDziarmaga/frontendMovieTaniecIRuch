import { useState } from "react";
//Import next components
import Link from "next/link";
//Import styled components
import { NavigationContainer } from "./nav.styles";
//Import Elements
import NavLogo from "./nav.logo";
import NavScreen from "./nav.screen";
import NavMobile from "./nav.mobile";
import NavHamburgerBTN from "./nav.hamburgerButton";
//framermotion - animation
const { AnimatePresence } = require("framer-motion");

const Nav = () => {
	const [activeMobile, setActiveMobile] = useState(false);
	const navElements = [
		{ name: "Aktualności", url: "/" },
		{ name: "Zajęcia", url: "/zajecia" },
		{ name: "Grafik", url: "https://app.fitssey.com/MOVI/frontoffice" },
		{ name: "O nas", url: "/Onas" },
		{ name: "Kontakt", url: "/kontakt" },
	];
	return (
		<div>
			<NavigationContainer>
				<NavLogo />
				<NavHamburgerBTN
					activeMobile={activeMobile}
					setActiveMobile={setActiveMobile}
				/>
				<NavScreen navElements={navElements} />
			</NavigationContainer>
			<AnimatePresence>
				{activeMobile && (
					<NavMobile
						navElements={navElements}
						setActiveMobile={setActiveMobile}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Nav;
