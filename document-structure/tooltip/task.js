const links = document.querySelectorAll('.has-tooltip');

links.forEach((element) => {
	element.addEventListener('click', showTooltip);

	function showTooltip(event) {
		event.preventDefault();
		const {
			top,
			left
		} = event.target.getBoundingClientRect();

		let tooltip = document.querySelector('.tooltip');
		if (tooltip) {
			tooltip.remove();
		}
		let title = event.target.getAttribute('title');
		event.target.insertAdjacentHTML('afterEnd', `<div class="tooltip">${title} </div>`);
		tooltip = document.querySelector('.tooltip');
		tooltip.style.top = `${top + 20}px`;
		tooltip.style.left = `${left}px`;
		tooltip.classList.add('tooltip_active');
		element.removeEventListener('click', showTooltip);
	}
});
	
  