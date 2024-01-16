const letterBtn = document.querySelectorAll('.font-size');
const mainText = document.querySelector('.book');
let size = null;

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


const colorCollection = document.querySelectorAll('.color');
let textColor = null;
let bgColor = null;

colorCollection.forEach(element => {
	element.addEventListener('click', chooseColor);
});

function chooseColor(event) {
	colorCollection.forEach(i => {
		i.classList.remove('color_active');
	});
	event.preventDefault();
	this.classList.add('color_active');
	textColor = this.getAttribute('data-text-color');
	bgColor = this.getAttribute('data-bg-color');
	mainText.classList.add(`book_color-${textColor}`, `book_bg-${bgColor}`);
}
 //mainText.classList.remove(`book_bg-${bgColor}`); 
 // mainText.classList.remove(`book_color-${textColor}`);