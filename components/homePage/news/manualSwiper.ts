export const manualSwiper = function (props: {
	move: string;
	abc: React.Dispatch<React.SetStateAction<number>>;
}) {
	/********************* FIND ALL BUTTONS ************/
	const btms = document.getElementsByClassName("news__navigation-btn");

	/* DEFINE EMPTY ARRAY FOR SERCHING ACTIVE BUTTON ***/
	let classes: any[] = [];

	/* FIND BUTTON WIDTH CLASS === active ***/
	if (btms.length > 0) {
		for (let i = 0; i < btms.length; i++) {
			classes.push(btms[i].classList[4]);
		}
		/* clases return ['active', undefined, undefined]*/

		let x = classes.findIndex((clas) => clas === "active");
		/* x return index of active element*/

		/* return active clases from all elements*/
		for (let i = 0; i < btms.length; i++) {
			btms[i].classList.remove("active");
		}

		if (props.move === "right") {
			if (x === 0) {
				x = btms.length - 1;
			} else {
				x--;
			}
		} else {
			if (x >= btms.length - 1) {
				x = 0;
			} else {
				x++;
			}
		}

		btms[x].classList.add("active");
		props.abc(x);
	}
};
