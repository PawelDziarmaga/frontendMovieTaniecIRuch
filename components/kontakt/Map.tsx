import { MapBox } from "./kostakt.styles";

function Map() {
	return (
		<MapBox>
			<h2>Wskazówki dojazdu</h2>

			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.1575641743034!2d18.971739415892152!3d50.30765160552471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d3e04fce871f%3A0xf48c9364805b0fb1!2sMOVI%20taniec%20i%20ruch!5e0!3m2!1spl!2spl!4v1660842694116!5m2!1spl!2spl'
				loading='lazy'></iframe>
		</MapBox>
	);
}

export default Map;
