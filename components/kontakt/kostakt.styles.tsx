import styled from "styled-components";
export const AdressContainer = styled.div`
	border-bottom: 5px solid var(--primary);

	padding: 5vh 2% 5vh 2%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	@media screen and (max-width: 800px) {
		display: block;
	}
	h1 {
		margin-bottom: 3vh;
		border-bottom: 5px solid var(--secondary);
		text-align: center;
	}
	&__adress,
	&__kontakt {
	}
`;

export const AdressUl = styled.ul`
	li {
		text-align: left;
		list-style: none;
		margin-bottom: 1.5vh;

		span {
			color: var(--secondary);
		}
	}
`;
export const MapBox = styled.div`
	padding: 5vh 2% 5vh 2%;
	border-bottom: 5px solid var(--primary);

	margin-bottom: 3vh;
	h2 {
		margin-bottom: 3vh;

		text-align: center;
	}
	iframe {
		display: block;
		margin: 0 auto;
		width: 80%;
		height: 50vh;
	}
`;
export const SocialMediaBox = styled.div`
	padding: 5vh 2% 5vh 2%;
	h1 {
		margin-bottom: 3vh;
	}
	ul {
		li {
			padding-left: 30%;
			text-align: left;
			list-style: none;
			margin-bottom: 1.5vh;
			img {
				height: 35px;
				padding-right: 5%;
			}
			span {
				display: inline-block;
				transform: translate(0, -10px);
				color: var(--fontGrey);
			}
		}
	}
`;
