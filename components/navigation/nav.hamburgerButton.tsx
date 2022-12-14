//Import styled components
import { NavigationHamburgerBTN } from "./nav.styles";
function NavHamburgerBTN(props: {
	activeMobile: boolean;
	setActiveMobile: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<NavigationHamburgerBTN
			className='nav__hamburger'
			active={props.activeMobile}
			onClick={() => props.setActiveMobile((prev: boolean) => !prev)}>
			<span></span>
		</NavigationHamburgerBTN>
	);
}

export default NavHamburgerBTN;
