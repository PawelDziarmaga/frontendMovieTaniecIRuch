import styled, { keyframes } from "styled-components";
export const HeaderStyle = styled.div`
	position: relative;
	width: 100%;
	height: 85vh;
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
		font-size: 2.5rem;
		font-weight: 100;
		border: 0.5em solid var(--fontWhite);
		padding: 2vh 10%;
		@media (max-width: 750px) {
			font-size: 2rem;
			font-weight: 50;
		}
		@media (max-width: 550px) {
			font-size: 1.5rem;
		}
		@media (max-width: 350px) {
			font-size: 1rem;
		}
	}
`;

export const ContainerBTN = styled.div`
	display: flex;
	justify-content: space-around;
	position: absolute;
	top: 60%;
	left: 50%;
	width: 100%;
	transform: translate(-50%, -50%);
`;

export const BTN = styled.div`
	display: flex;
	justify-content: space-around;

	width: 40%;
	font-family: "Bebas Neue", cursive;

	color: var(--fontWhite);
	border: 1rem solid var(--primary);
	background-color: var(--primary);

	transition: 0.3s;

	@media (max-width: 750px) {
		border: 0.8rem solid var(--primary);
	}
	@media (max-width: 550px) {
		border: 0.6rem solid var(--primary);
	}
	@media (max-width: 350px) {
		border: 0.4rem solid var(--primary);
	}

	&:hover {
		background-color: transparent;
		color: var(--primary);
		border: 1rem solid var(--primary);
		@media (max-width: 750px) {
			font-size: 2rem;
			border: 0.8rem solid var(--primary);
		}
		@media (max-width: 550px) {
			font-size: 1.5rem;
			border: 0.6rem solid var(--primary);
		}
		@media (max-width: 350px) {
			font-size: 1rem;
			border: 0.4rem solid var(--primary);
		}
		span {
			background-color: var(--primary);
			color: #75c1ff;
		}
	}

	p {
		font-size: 2.5rem;

		font-weight: 100;
		place-self: center stretch;
		@media (max-width: 750px) {
			font-size: 2rem;
		}
		@media (max-width: 550px) {
			font-size: 1.5rem;
		}
		@media (max-width: 350px) {
			font-size: 1rem;
		}
	}

	span {
		place-self: center stretch;
		text-align: center;

		font-size: 5rem;
		line-height: 3.5rem;
		height: 3rem;
		width: 3rem;
		border-radius: 50%;

		background-color: var(--fontWhite);
		color: var(--primary);

		transition: 0.3s;

		@media (max-width: 750px) {
			height: 2.5rem;
			width: 2.5rem;
			font-size: 4rem;
			line-height: 3rem;
		}
		@media (max-width: 550px) {
			height: 2rem;
			width: 2rem;
			font-size: 3rem;
			line-height: 2.5rem;
		}
		@media (max-width: 350px) {
			height: 1.5rem;
			width: 1.5rem;
			font-size: 2rem;
			line-height: 1.8rem;
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
	top: 90%;
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
