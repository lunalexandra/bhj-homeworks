const letterBtn = document.querySelectorAll('.font-size');
const mainText = document.querySelector('.book');
const textColorCollection = Array.from(document.querySelector('.book__control_color').children);
const bgColorCollection = Array.from(document.querySelector('.book__control_background').children);

let size = null;
let textColor = null;
let bgColor = null;

letterBtn.forEach(element => {
	element.addEventListener('click', chooseSize);
});

function chooseSize(event) {
	mainText.classList.remove(`font-size_${size}`);
	letterBtn.forEach(i => {
		i.classList.remove('font-size_active');
	});
	event.preventDefault();
	this.classList.add('font-size_active');
	size = this.getAttribute('data-size');
	mainText.classList.add(`font-size_${size}`);
}


textColorCollection.forEach(element => {
	element.addEventListener('click', chooseTextColor);
});

function chooseTextColor(event) {
	mainText.classList.remove(`book_color-${textColor}`);
	event.preventDefault();
	textColorCollection.forEach(i => {
		i.classList.remove('color_active');
		this.classList.add('color_active');
		textColor = this.getAttribute('data-text-color');
		mainText.classList.add(`book_color-${textColor}`);
	});
}

bgColorCollection.forEach(element => {
	element.addEventListener('click', chooseBgColor);
});

function chooseBgColor(event) {
	mainText.classList.remove(`book_bg-${bgColor}`);
	event.preventDefault();
	bgColorCollection.forEach(i => {
		i.classList.remove('color_active');
		this.classList.add('color_active');
		bgColor = this.getAttribute('data-bg-color');
		mainText.classList.add(`book_bg-${bgColor}`);
	});
}