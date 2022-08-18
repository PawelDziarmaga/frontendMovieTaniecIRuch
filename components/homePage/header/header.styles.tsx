import styled, { keyframes } from "styled-components";
export const HeaderStyle = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
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
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 75%;

		font-family: "Bebas Neue", cursive;
		color: var(--fontWhite);
		font-size: 7vh;
		font-weight: 100;
		border: 2vh solid var(--fontWhite);
		padding: 2vh 10%;
	}
`;

export const ContainerBTN = styled.div`
	display: flex;
	justify-content: space-around;
	position: absolute;
	top: 70%;
	left: 50%;
	width: 100%;
	transform: translate(-50%, -50%);
`;

export const BTN = styled.div`
	width: 40%;
	font-family: "Bebas Neue", cursive;
	color: var(--fontWhite);
	font-size: 6vh;
	font-weight: 100;
	border: 2vh solid var(--primary);
	padding: 1vh 3%;
	background-color: var(--primary);
	transition: 0.3s;
	&:hover {
		background-color: transparent;
		color: var(--primary);
		border: 2vh solid var(--primary);
		span {
			background-color: var(--primary);
			color: #75c1ff;
		}
	}
	span {
		display: inline-block;

		margin-left: 5%;

		font-size: 7vh;
		line-height: 7vh;
		height: 6vh;
		width: 6vh;
		border-radius: 50%;

		background-color: var(--fontWhite);
		color: var(--primary);

		transition: 0.3s;
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
`;
