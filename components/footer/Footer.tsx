//import style
import {
	FooterStyle,
	FirstFloor,
	SecondFloor,
	ThirdFloor,
} from "./footer.styles";
//import elements
import Cooperation from "./Cooperation";
import Adres from "./Adres";
import Kontakt from "./Kontakt";
import SocialMedia from "./SocialMedia";
const Footer = () => {
	return (
		<FooterStyle>
			<FirstFloor>
				<Adres />
				<Kontakt />
				<SocialMedia />
			</FirstFloor>
			<SecondFloor>
				<Cooperation />
			</SecondFloor>
			<ThirdFloor>
				<h5>©2022 Wszelkie prawa zastrzeżone</h5>
			</ThirdFloor>
		</FooterStyle>
	);
};

export default Footer;
