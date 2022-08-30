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
//import data from strapi
import { useQuery } from "urql";
import { KONTAKT } from "../../lib/query";
const Footer = () => {
	//Fetch result from strapi
	const [result] = useQuery({ query: KONTAKT });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;
	const elements = data.kontakt.data.attributes;
	return (
		<FooterStyle>
			<FirstFloor>
				<Adres
					nazwa={elements.AdresNazwa}
					ulica={elements.AdresUlica}
					miasto={elements.AdresMiasto}
				/>
				<Kontakt
					email={elements.KontaktEmail}
					tel={elements.KontaktTelefon}
				/>
				<SocialMedia
					fb={elements.SpolecznoscFacebook}
					instagram={elements.SpolecznoscInstagram}
					yt={elements.SpolecznoscYoutube}
					images={elements.SocialMedia.data}
				/>
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
