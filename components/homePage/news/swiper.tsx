class Swiper {
	initialY: number;
	initialX: number;
	events: {
		swipeUp: Event;
		swipeDown: Event;
		swipeLeft: Event;
		swipeRight: Event;
	};
	constructor() {
		this.initialY = 0;
		this.initialX = 0;

		document.addEventListener("touchstart", (event) =>
			this.startTouch(event)
		);
		document.addEventListener("touchmove", (event) =>
			this.moveTouch(event)
		);

		this.events = {
			swipeUp: new Event("swipeUp"),
			swipeDown: new Event("swipeDown"),
			swipeLeft: new Event("swipeLeft"),
			swipeRight: new Event("swipeRight"),
		};
	}

	startTouch(event: TouchEvent) {
		this.initialX = event.touches[0].clientX;
		this.initialY = event.touches[0].clientY;
	}
	moveTouch(event: TouchEvent) {
		if (!this.initialX || !this.initialX) {
			return;
		}
		const curretX = event.touches[0].clientX;
		const curretY = event.touches[0].clientY;

		const diffX = this.initialX - curretX;
		const diffY = this.initialY - curretY;

		if (Math.abs(diffX) > Math.abs(diffY)) {
			if (diffX > 0) {
				document.dispatchEvent(this.events.swipeLeft);
			} else {
				document.dispatchEvent(this.events.swipeRight);
			}
		} else {
			if (diffY > 0) {
				document.dispatchEvent(this.events.swipeUp);
			} else {
				document.dispatchEvent(this.events.swipeDown);
			}
		}

		this.initialX = 0;
		this.initialY = 0;
	}
}

export default Swiper;
