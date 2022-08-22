import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='pl'>
			<Head>
				<meta
					name='Description'
					content='MOVI to nowe miejsce na tanecznej i sportowej mapie Śląska. Tworzymy je z myślą o wszystkich tych, którzy chcą rozpocząć lub kontynuować swoją taneczną przygodę, a także zadbać o swoje zdrowie i ciało'
				/>
				<meta
					name='Keywords'
					content='MOVI, Taniec, Ruch, Szkoła, Szkoła Tańca, Taniec Towarzyski, Taniec Użytkowy, Latino, Balet, Techniki Tańca klasycznego, Taniec Współczesny, Zajęcia ruchowe dla dzieci, Fitness, Stretchung, Pilates, Joga, TBC, STEP, Body Shape, BPU'
				/>
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
