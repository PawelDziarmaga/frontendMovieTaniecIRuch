import styled from "styled-components";
//framermotion - animation
const { motion } = require("framer-motion");
export const NewsStyle = styled.div`
	position: relative;
	height: 90vh;
	width: 100%;
	@media screen and (max-width: 400px) {
		height: 200vw;
	}
`;
export const Background = styled.div<{ img: string }>`
	z-index: -1;
	background-image: url(${(props) => props.img});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	position: absolute;
	height: 100%;
	width: 100%;
`;
export const Container = styled.div`
	background-color: $neutral-2;
	height: 100%;
	width: 100%;
`;
export const ButtonsContainer = styled.div`
	margin: 3vh auto;
	display: flex;
	justify-content: center;
`;

export const Buttons = styled.button`
	background-color: #5590c8;
	border: 1px solid #1c71c0;
	width: 20px;
	height: 20px;
	margin: 0 15px;
	border-radius: 50%;
	cursor: pointer;
	@media all and (max-width: 350px) {
		width: 5vw;
		height: 5vw;
		margin: 0 5vw;
	}
	&.active {
		background-color: #ca2a67;
		border: 1px solid #a5134b;
	}
`;
export const NewsIMGContainer = styled.div``;
export const Images = styled(motion.div)`
	padding: 0 auto;
	display: none;
	&.active {
		display: block;
	}
	img {
		display: block;
		margin: 0 auto;
		padding-top: 3vh;
		height: 80vh;
		@media screen and (max-width: 400px) {
			width: 90%;
			height: auto;
		}
	}
`;
