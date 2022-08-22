import styled from "styled-components";
//framermotion - animation
const { motion } = require("framer-motion");

export const NavigationContainer = styled.div`
	z-index: 10;
	padding: 10px 0;
	position: fixed;
	width: 100%;
	background-color: var(--background);
	display: flex;
	justify-content: space-evenly;

	@media (max-width: 1300px) {
		padding: 10px 3%;
		justify-content: space-between;
	}
	@media (max-width: 250px) {
		padding: 10px 0%;
	}
`;
export const NavigationLogo = styled.div`
	img {
		height: 80px;
		margin-top: 5px;
		@media screen and (max-width: 950px) {
			height: 50px;
			margin-top: 0px;
		}
	}
`;
export const NavigationScreen = styled.div`
	display: flex;
	flex-wrap: nowrap;

	@media (max-width: 950px) {
		display: none;
	}

	a {
		font-family: "Bebas Neue", cursive;
		display: block;
		height: 100%;
		padding: 0px 15px;
		line-height: 100px;

		text-transform: uppercase;
		font-size: 2rem;
		color: var(--fontGrey);

		text-align: center;
		text-decoration: none;

		transition: 0.2s;

		@media (max-width: 1300px) {
			font-size: 1.5rem;
		}
	}
`;
export const NavigationMobile = styled(motion.div)`
	z-index: 10;
	top: 70px;
	position: fixed;
	height: 100vh;
	width: 100vw;
	background-color: var(--background);

	@media (min-width: 950px) {
		display: none;
	}
	a {
		font-family: "Bebas Neue", cursive;
		text-transform: uppercase;
		font-size: 1.5rem;
		color: var(--fontGrey);

		display: block;
		margin: 0 20%;
		border-bottom: 1px solid var(--fontGrey);
		line-height: 5rem;
		text-decoration: none;
		transition: 0.2s;
		&:hover {
			font-size: 1.6em;
		}
	}
`;
export const NavigationHamburgerBTN = styled.nav<{ active: boolean }>`
	display: none;
	height: 50px;
	width: 50px;
	top: 20px;
	right: 30px;
	position: absolute;

	cursor: pointer;
	@media (max-width: 950px) {
		display: block;
	}

	span {
		position: absolute;
		top: 25px;
		height: 3px;
		width: 40px;
		background-color: gray;
		transition: 0.2s 0.2s ease-in-out;
		${(props) => (props.active ? "background-color: transparent" : null)};
		&:before,
		&:after {
			position: absolute;
			height: 3px;
			width: 40px;
			background-color: gray;
			content: "";
			transition: 0.2s 0.2s ease-in-out;
		}
		&:before {
			top: 10px;
			${(props) =>
				props.active
					? "transform: translateY(-10px) rotate(45deg)"
					: null};
		}
		&:after {
			bottom: 10px;
			${(props) =>
				props.active
					? "transform: translateY(10px) rotate(-45deg);"
					: null};
		}
	}
`;
