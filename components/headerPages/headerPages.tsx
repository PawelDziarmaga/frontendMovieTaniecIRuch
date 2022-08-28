import {
	HeaderStyle,
	BackgroundIMG,
	Content,
	Arrow,
} from "./headerPages..styles";

const HeaderPages = (props: { title: string; img: string }) => {
	return (
		<HeaderStyle>
			<BackgroundIMG img={props.img}></BackgroundIMG>
			<Content>
				<h1>{props.title}</h1>

				<Arrow>»</Arrow>
			</Content>
		</HeaderStyle>
	);
};

export default HeaderPages;
