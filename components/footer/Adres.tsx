//import style
import { Socials } from "./footer.styles";
function Adres(props: { nazwa: string; ulica: string; miasto: string }) {
	return (
		<Socials>
			<h1>Adres</h1>
			<ul>
				<li>{props.nazwa}</li>
				<li>{props.ulica}</li>
				<li>{props.miasto}</li>
			</ul>
		</Socials>
	);
}

export default Adres;
