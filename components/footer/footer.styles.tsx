import styled from "styled-components";
export const FooterStyle = styled.div`
	text-align: center;
	color: white;
`;
export const FirstFloor = styled.div`
	background-color: #334756;
	padding-top: 5vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;
export const SecondFloor = styled.div`
	background-color: #2c394b;
`;
export const ThirdFloor = styled.div`
	font-size: 15px;
	padding: 1vh;
	background-color: #082032;
`;
export const Socials = styled.div`
	padding: 0 2% 5vh 2%;
	h1 {
		border-bottom: 5px solid #ce6161;
		margin-bottom: 3vh;
		font-size: 20px;
	}
	ul {
		font-size: 15px;
		min-width: 250px;
		@media screen and (max-width: 300px) {
			font-size: 10px;
			min-width: 0;
		}

		li {
			text-align: left;
			list-style: none;
			margin-bottom: 1.5vh;
			img {
				height: 35px;
				padding-right: 5%;
			}
			span {
				color: $font-white-color;
				display: inline-block;
				transform: translate(0, -10px);
			}
		}
	}
`;
export const Logos = styled.div`
	padding: 0.5rem 0.5rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
	grid-gap: 1rem;
	img {
		width: 40%;
		display: flex;

		place-self: center;
	}
`;
