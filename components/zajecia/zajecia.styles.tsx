import styled from "styled-components";

export const GeneralContainer = styled.div`
	display: flex;
	margin-bottom: 3vh;
	@media screen and (max-width: 1200px) {
		display: block;
	}
	img {
		width: auto;
		height: 15vw;
		@media screen and (max-width: 1700px) {
			height: 20vw;
		}

		@media screen and (max-width: 1200px) {
			display: block;
			margin: 3vh auto;
			height: 30vw;
		}
		@media screen and (max-width: 800px) {
			height: 40vw;
		}
		@media screen and (max-width: 800px) {
			height: 50vw;
		}
	}
	div {
		margin: 0 5%;
		@media screen and (max-width: 1700px) {
			margin: 0 2%;
		}

		p {
			margin: 0 1vh 2vh 1vh;
			text-align: justify;
			font-size: 20px;
			@media screen and (max-width: 1500px) {
				font-size: 15px;
			}
			@media screen and (max-width: 1000px) {
				font-size: 13px;
			}
		}
	}
`;
export const ChoiceContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	h3 {
		font-size: 20px;
		color: var(--fontGrey);
		@media screen and (max-width: 1000px) {
			font-size: 15px;
		}

		display: inline-flex;

		box-shadow: 0 0 2px #8c8c8c;
		border-radius: 3px;

		padding: 5px;
		margin: 5px;

		cursor: pointer;
	}
	.active {
		h3 {
			color: #ca2a67;
		}
	}
`;
export const InformationContainer = styled.div`
	margin-top: 1vh;
	h1 {
		margin: 2vh 10%;

		border-bottom: 5px solid var(--primary);
		display: inline;
		@media screen and (max-width: 800px) {
			margin: 1vh 5%;
			font-size: 22px;
		}
		@media screen and (max-width: 500px) {
			font-size: 18px;
		}
	}
	p {
		text-align: justify;
		margin: 3vh 10%;

		@media screen and (max-width: 800px) {
			padding: 1vh 5%;
		}
		@media screen and (max-width: 500px) {
			font-size: 12px;
		}
	}
`;
export const BTN = styled.div`
	cursor: pointer;
	text-align: center;
	margin: 2vh auto;
	width: 30%;
	font-family: "Bebas Neue", cursive;

	color: var(--fontWhite);
	border: 0.5rem solid var(--primary);
	background-color: var(--primary);

	transition: 0.3s;

	&:hover {
		background-color: transparent;
		color: var(--primary);
		border: 0.5rem solid var(--primary);
	}
`;
