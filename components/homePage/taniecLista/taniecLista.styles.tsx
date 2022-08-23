import styled from "styled-components";

export const Container = styled.div`
	border-bottom: 5px solid #ca2a67;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
	grid-gap: 0rem;
	@media screen and (max-width: 400px) {
		grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
	}
	@media screen and (max-width: 200px) {
		grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
	}
	div:nth-child(2n) {
		.BackGround {
			background-color: #17101077;
		}
	}
`;
export const BackGround = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	background-color: #5590c8aa;
`;
export const Element = styled.div`
	cursor: pointer;
	position: relative;

	img {
		width: 100%;
		height: auto;
		@media screen and (max-width: 800px) {
			display: block;
			margin: 0 auto 0 auto;
		}
		@media screen and (max-width: 450px) {
			width: 100%;
		}
	}
`;

export const H1 = styled.div`
	position: absolute;
	z-index: 2;

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 2rem;
	font-weight: bold;
	color: #f4f9f9;

	text-align: center;
	text-transform: uppercase;

	@media screen and (max-width: 400px) {
		font-size: 1rem;
	}
`;
