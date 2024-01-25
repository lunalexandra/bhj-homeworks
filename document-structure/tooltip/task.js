const links = document.querySelectorAll('.has-tooltip');
const titleValues = [];

for (let i = 0; i < links.length; i++) {
	titleValues.push(links[i].getAttribute('title'));
}

links.forEach((element, index) => {
	element.insertAdjacentHTML('afterEnd', `<div class="tooltip">${titleValues[index]}</div>`);
});

const divs = document.querySelectorAll('.tooltip');

links.forEach((element) => {
	element.addEventListener('click', (event) => {
		event.preventDefault();
		divs.forEach(el => el.classList.remove('tooltip_active'));
		element.nextElementSibling.classList.add('tooltip_active')
	});
})
  
    
  