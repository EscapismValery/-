export function swipe() {
	const desc = document.querySelector(".description");
	document.addEventListener('touchstart', handleTouchStart, false);
	document.addEventListener('touchmove', handleTouchMove, false);
	let x1 = null;
	let y1 = null;
	function handleTouchStart(e) {
		x1 = e.touches[0].pageX;
		y1 = e.touches[0].pageY;
	}
	function handleTouchMove(e) {
		if (!x1 || !y1) {
			return false;
		}
		let x2 = e.touches[0].pageX;
		let y2 = e.touches[0].pageY;
		let xDiff = x2 - x1;
		let yDiff = y2 - y1;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff < 0) {
				return desc.classList.add("hidden");
			}
		} else {
			if (yDiff > 0) {
				desc.classList.remove("hidden");
			} else {
				desc.classList.add("hidden");
			}
		}
		x1 = null;
		y1 = null;
	}
}