const tags = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content');

tags.forEach((tab, index) => {
	tab.addEventListener('click', addActive);

	function addActive() {
		reset();
		tab.classList.add('tab_active');
		content.forEach((element, i) => {
			i == index ? element.classList.toggle('tab__content_active') : element.classList.remove('tab__content_active');
		});
	}
});

function reset() {
	tags.forEach(i => {
		i.classList.remove('tab_active');
	});
	content.forEach(i => {
		i.classList.remove('tab_active');
	});
}