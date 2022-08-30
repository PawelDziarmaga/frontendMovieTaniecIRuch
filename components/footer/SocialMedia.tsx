//import style
import Link from "next/link";
import { Socials } from "./footer.styles";

function SocialMedia(props: {
	fb: string;
	instagram: string;
	yt: string;
	images: {
		attributes: { formats: { small: { name: string; url: string } } };
	}[];
}) {
	console.log(props.images[0]);
	return (
		<Socials>
			<h1>Kontakt</h1>
			<ul>
				<li>
					<Link href='https://www.facebook.com/movi.chorzow'>
						<div>
							<img
								src={
									props.images[1].attributes.formats.small.url
								}
								alt=''
							/>
							<span>Facebook</span>
						</div>
					</Link>
				</li>
				<li>
					<Link href='https://www.instagram.com/movi.tanieciruch'>
						<div>
							<img
								src={
									props.images[0].attributes.formats.small.url
								}
								alt=''
							/>
							<span>Instagram</span>
						</div>
					</Link>
				</li>
				<li>
					<Link href='https://www.youtube.com/'>
						<div>
							<img
								src={
									props.images[2].attributes.formats.small.url
								}
								alt=''
							/>
							<span>Youtube</span>
						</div>
					</Link>
				</li>
			</ul>
		</Socials>
	);
}

export default SocialMedia;
