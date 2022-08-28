import { useEffect, useRef, useState } from "react";
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
	const navScrollViev = function (possition: number) {
		let nav: Element = document.getElementsByClassName("nav")[0];

		if (possition === 0) {
			possition = Math.floor(window.scrollY / 10);
		}

		if (activeMobile) {
			/*nav.classList.remove("opacity-nav");*/
		} else {
			if (possition < 5) {
				/*nav.classList.add("opacity-nav");*/
				nav.classList.remove("visible-nav");
			} else {
				/*nav.classList.add("visible-nav");*/
				if (possition > 15) {
					if (possition > Math.floor(window.scrollY / 10)) {
						nav.classList.remove("visible-nav");
						/*nav.classList.remove("opacity-nav");*/
					} else if (possition < Math.floor(window.scrollY / 10)) {
						nav.classList.add("visible-nav");
						/*nav.classList.remove("opacity-nav");*/
					} else {
						/*nav.classList.remove("opacity-nav");*/
					}
				}
			}
		}
	};
	let possition = useRef(0);

	useEffect(() => {
		window.onscroll = () => {
			navScrollViev(possition.current);
			possition.current = Math.floor(window.scrollY / 10);
		};
	});

	return (
		<div>
			<NavigationContainer className='nav'>
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
