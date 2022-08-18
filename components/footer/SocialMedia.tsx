//import style
import Link from "next/link";
import { Socials } from "./footer.styles";

function SocialMedia() {
	return (
		<Socials>
			<h1>Kontakt</h1>
			<ul>
				<li>
					<Link href='https://www.facebook.com/movi.chorzow'>
						<span>
							<span>Facebook</span>
						</span>
					</Link>
				</li>
				<li>
					<Link href='https://www.instagram.com/movi.tanieciruch'>
						<span>
							<span>Instagram</span>
						</span>
					</Link>
				</li>
				<li>
					<Link href='https://www.youtube.com/'>
						<span>
							<span>Youtube</span>
						</span>
					</Link>
				</li>
			</ul>
		</Socials>
	);
}

export default SocialMedia;
