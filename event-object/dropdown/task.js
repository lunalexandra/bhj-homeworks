const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');
const links = document.querySelectorAll('.dropdown__link');

function openList() {
	dropdownList.classList.toggle('dropdown__list_active');
}

dropdownValue.addEventListener('click', openList);

items.forEach(i => {
	i.addEventListener('click', chooseItem);
	function chooseItem(){
		dropdownValue.textContent = i.textContent;
		return false
	}
});