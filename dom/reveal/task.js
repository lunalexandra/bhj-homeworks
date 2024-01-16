const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', function() {
	reveal.forEach(element => {
		const {
			top,
			bottom
		} = element.getBoundingClientRect();
		if (top > 0 && bottom < window.innerHeight) {
			element.classList.add('reveal_active');
		} else element.classList.remove('reveal_active');
	});
});