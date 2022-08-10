import styled from "styled-components";
export const NavigationMobileContainer = styled.nav``;
export const NavigationContainer = styled.div`
	z-index: 10;
	padding: 10px 0;
	position: fixed;
	width: 100%;
	font-size: 0.9em;

	display: flex;
	justify-content: space-evenly;

	background-color: var(--background);
	box-shadow: 0px 0px 2px #393e46;

	transform: translateY(0);
	transition: 1s;

	@media (max-width: 1300px) {
		padding: 10px 3%;
		justify-content: space-between;
	}
	@media (max-width: 250px) {
		padding: 10px 0%;
	}
`;
export const NavigationLogo = styled.div`
	place-self: center;
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
		font-size: 2.5rem;
		color: var(--fontGrey);

		text-align: center;
		text-decoration: none;

		border-bottom: 2px solid transparent;
		transition: border-bottom 0.5s;
		@media (max-width: 1300px) {
			font-size: 19px;
		}
		&:hover {
			border-bottom: 3px solid $font-white-color;
		}
	}
`;
export const NavigationMobile = styled.div`
	z-index: 10;
	top: 75px;
	position: fixed;
	height: 100vh;
	width: 100vw;
	background-color: var(--backgroundColor);

	transition: 0.2s 0.2s ease-in-out;

	@media (min-width: 950px) {
		display: none;
	}
	a {
		font-family: "Bebas Neue", cursive;
		text-transform: uppercase;
		font-size: 1.5rem;
		color: var(--fontGrey);

		display: block;
		line-height: 50px;
		text-decoration: none;
		transition: 0.2s;
		&:hover {
			font-size: 1.1em;
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
