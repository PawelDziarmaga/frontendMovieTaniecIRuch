import { FacebookStyle } from "./facebook.style";

function Facebook() {
	return (
		<FacebookStyle>
			<div
				className='fb-page'
				data-href='https://www.facebook.com/movi.chorzow/'
				data-tabs='timeline'
				data-width='1000'
				data-height='2000'
				data-small-header='true'
				data-adapt-container-width='true'
				data-hide-cover='true'
				data-show-facepile='true'>
				<blockquote
					cite='https://www.facebook.com/movi.chorzow/'
					className='fb-xfbml-parse-ignore'>
					<a href='https://www.facebook.com/movi.chorzow/'>
						MOVI taniec i ruch
					</a>
				</blockquote>
			</div>
		</FacebookStyle>
	);
}

export default Facebook;
