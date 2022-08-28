import styled, { keyframes } from "styled-components";
export const HeaderStyle = styled.div`
	position: relative;
	width: 100%;
	height: 45vh;
	@media (max-width: 750px) {
		height: 35vh;
	}
	@media (max-width: 550px) {
		height: 30vh;
	}
	@media (max-width: 350px) {
		height: 20vh;
	}
`;
export const BackgroundIMG = styled.div<{ img: string }>`
	position: absolute;
	background-image: url(${(props) => props.img});
	background-position: top;
	background-size: cover;
	width: 100%;
	height: 100%;
`;
export const Content = styled.div`
	position: absolute;
	background-color: #5590c8c8;
	width: 100%;
	height: 100%;
	h1 {
		text-align: center;

		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 75%;

		font-family: "Bebas Neue", cursive;
		color: var(--fontWhite);
		font-size: 5rem;
		font-weight: 100;

		padding: 2vh 10%;
		@media (max-width: 750px) {
			font-size: 4rem;
			font-weight: 50;
		}
		@media (max-width: 550px) {
			font-size: 3rem;
		}
		@media (max-width: 350px) {
			font-size: 2rem;
		}
	}
`;

export const arrowPuls = keyframes`
    0% {
            transform: translate(-50%, -50%) rotate(90deg) scale(1);
        }

    100% {
            transform: translate(-50%, -50%) rotate(90deg) scale(1.3);
        }
    `;
export const Arrow = styled.div`
	position: absolute;
	top: 70%;
	left: 50%;

	text-align: center;
	font-family: "Bebas Neue", cursive;

	font-size: 15vh;

	color: var(--fontWhite);
	animation: ${arrowPuls} 0.8s ease infinite alternate;
	@media screen and (max-width: 400px) {
		font-size: 10vh;
	}
	@media screen and (max-width: 200px) {
		font-size: 5vh;
	}
`;
