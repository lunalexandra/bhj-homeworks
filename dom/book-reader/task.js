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



/*Альтернативный способ решения от преподавателя

const bookElement = document.getElementById("book");
const controlElements = document.querySelector(".book__controls");

controlElements.addEventListener("click", function (event) {
  event.preventDefault();

  const { size, textColor, bgColor } = event.target.dataset;

  const elementClassArray = event.target.classList;
  const activeControl = event.target.closest(".book__control").querySelectorAll("a");

  activeControl.forEach((element) => {
    element.classList.remove(elementClassArray[0] + "_active");
  });

  event.target.classList.add(elementClassArray[0] + "_active");

  function removePreviousClassName(className) {
    for (value of bookElement.classList) {
      if (value.includes(className)) {
        bookElement.classList.remove(value);
      }
    }
  }

  if (size || event.target.className === "font-size font-size_active") {
    removePreviousClassName("book_fs-");
    bookElement.classList.add("book_fs-" + size);
  }

  if (textColor) {
    removePreviousClassName("book_color-");
    bookElement.classList.add("book_color-" + textColor);
  }

  if (bgColor) {
    removePreviousClassName("book_bg-");
    bookElement.classList.add("book_bg-" + bgColor);
  }
});
*/