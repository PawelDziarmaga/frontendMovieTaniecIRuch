import { AdressContainer, AdressUl } from "./kostakt.styles";
type PropsType = {
	elements: {
		AdresMiasto: string;
		AdresNazwa: string;
		AdresUlica: string;
		KontaktEmail: string;
		KontaktTelefon: string;
	};
};
function Adress(props: PropsType) {
	return (
		<AdressContainer>
			<div>
				<h1>Adres</h1>
				<AdressUl>
					<li>{props.elements.AdresNazwa}</li>
					<li>{props.elements.AdresUlica}</li>
					<li>{props.elements.AdresMiasto}</li>
				</AdressUl>
			</div>
			<div>
				<h1>Kontakt</h1>
				<AdressUl>
					<li>
						email: <span>{props.elements.KontaktEmail}</span>
					</li>
					<li>
						telefon: <span>{props.elements.KontaktTelefon}</span>
					</li>
				</AdressUl>
			</div>
		</AdressContainer>
	);
}

export default Adress;
