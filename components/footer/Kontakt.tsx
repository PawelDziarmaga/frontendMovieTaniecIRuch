//import style
import { Socials } from "./footer.styles";

function Kontakt(props: { email: string; tel: string }) {
	return (
		<Socials>
			<h1>Kontakt</h1>
			<ul>
				<li>email: {props.email}</li>
				<li>telefon: {props.tel}</li>
			</ul>
		</Socials>
	);
}

export default Kontakt;
