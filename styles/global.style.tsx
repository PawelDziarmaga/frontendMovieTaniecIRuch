import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    margin: 0;
	background: #f4f9f9;

    --primary: #ca2a67;
    --secondary: #5590c8;

    --background: #f4f9f9;

    --fontGrey: #8c8c8c;
    --fontWhite: #f4f9f9;
}
h2{
    font-size: 1.2 rem;
    color: var(--primary)
}
h2{
    font-size: 1 rem;
    color: var(--secondary)
}
a{
    color: black;
    text-decoration: none;
}
p{
    line-height:150%
    }
    main{
      
        padding-top: 84px;
        min-height: 70vh;
        @media (min-width: 950px) {
            padding-top:122px;
	}
    }
`;
