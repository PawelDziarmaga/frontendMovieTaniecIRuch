import type { AppProps } from "next/app";
//Import elements
import Nav from "../components/navigation/nav";
import Footer from "../components/footer/Footer";
//Import grapgql
import { Provider, createClient } from "urql";
//import styless
import { GlobalStyle } from "../styles/global.style";

const client = createClient({
	url: process.env.NEXT_PUBLIC_BACKEND_API as string,
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider value={client}>
			<Nav />
			<Component {...pageProps} />
			<Footer />
			<GlobalStyle />
		</Provider>
	);
}

export default MyApp;
