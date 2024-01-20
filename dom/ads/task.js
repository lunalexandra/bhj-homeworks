const rotatorCase = document.querySelectorAll('.rotator__case');

let index = 0;
let speed = 1000;

const intervalID = setInterval(changePhrase, speed);

function changePhrase() {
	rotatorCase.forEach(element => {
    element.classList.remove('rotator__case_active')
  });
  
	if (index < rotatorCase.length) {
		rotatorCase[index].classList.add('rotator__case_active');
		return index++;
	} else {
		return index = 0;
	}
}