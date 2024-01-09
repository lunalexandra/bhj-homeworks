const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const items = Array.from(document.querySelectorAll('.dropdown__item'));

function openList() {
	dropdownList.classList.add('dropdown__list_active');
}

function closeList() {
	dropdownList.classList.remove('dropdown__list_active');
}

dropdownValue.addEventListener('click', openList);

items.forEach((i, index) => {
	i.addEventListener('click', chooseItem);

	function chooseItem(i) {
		i.preventDefault();
		closeList();
		dropdownValue.textContent = items[index].textContent;
	}
});