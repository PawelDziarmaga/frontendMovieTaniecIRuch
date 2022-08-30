import Link from "next/link";
import { SocialMediaBox } from "./kostakt.styles";
type PropsType = {
	elements: {
		SpolecznoscFacebook: string;
		SpolecznoscInstagram: string;
		SpolecznoscYoutube: string;
		SocialMedia: {
			data: {
				attributes: {
					formats: { small: { name: string; url: string } };
				};
			}[];
		};
	};
};
function SocialMedia(props: PropsType) {
	return (
		<SocialMediaBox>
			<h1>Społeczność</h1>
			<ul>
				<li>
					<Link href='https://www.facebook.com/movi.chorzow'>
						<div>
							<img
								src={
									props.elements.SocialMedia.data[1]
										.attributes.formats.small.url
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
									props.elements.SocialMedia.data[0]
										.attributes.formats.small.url
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
									props.elements.SocialMedia.data[2]
										.attributes.formats.small.url
								}
								alt=''
							/>
							<span>Youtube</span>
						</div>
					</Link>
				</li>
			</ul>
		</SocialMediaBox>
	);
}

export default SocialMedia;
