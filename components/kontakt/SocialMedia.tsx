import Link from "next/link";
import { SocialMediaBox } from "./kostakt.styles";
type PropsType = {
	elements: {
		SpolecznoscFacebook: string;
		SpolecznoscInstagram: string;
		SpolecznoscYoutube: string;
	};
};
function SocialMedia(props: PropsType) {
	return (
		<SocialMediaBox>
			<h1>Społeczność</h1>
			<ul>
				<li>
					<Link href={props.elements.SpolecznoscFacebook}>
						<span>
							<span>Facebook</span>
						</span>
					</Link>
				</li>
				<li>
					<Link href={props.elements.SpolecznoscInstagram}>
						<span>
							<span>Instagram</span>
						</span>
					</Link>
				</li>
				<li>
					<Link href={props.elements.SpolecznoscYoutube}>
						<span>
							<span>Youtube</span>
						</span>
					</Link>
				</li>
			</ul>
		</SocialMediaBox>
	);
}

export default SocialMedia;
