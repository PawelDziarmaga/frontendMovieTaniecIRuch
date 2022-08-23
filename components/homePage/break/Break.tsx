import styled from "styled-components";

function Break(props: { text: string }) {
	return (
		<BreakStyles>
			<h2>{props.text}</h2>
		</BreakStyles>
	);
}

export default Break;

export const BreakStyles = styled.div`
	h2 {
		font-family: "Bebas Neue", cursive;
		font-weight: 100;
		text-align: center;
		line-height: 20vh;
		font-size: 10vh;
		color: $font-grey-color;
		@media screen and (max-width: 1000px) {
			line-height: 15vh;
			font-size: 10vh;
		}
		@media screen and (max-width: 500px) {
			line-height: 15vh;
			font-size: 15vw;
		}
	}
`;
