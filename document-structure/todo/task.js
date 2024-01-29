const form = document.querySelector('form');
const input = document.querySelector('.tasks__input');
const btn = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');
let newTask = null;

btn.addEventListener('click', addTask);

function addTask(event) {
	event.preventDefault();
	if (input.value.trim()) {
		newTask = input.value;
		tasksList.insertAdjacentHTML('afterBegin', `<div class="task"><div class="task__title">
    ${newTask}
    </div>
    <a href="#" class="task__remove">&times;</a></div>`);
	}
	form.reset();
}

tasksList.addEventListener('click', closeTask);

function closeTask(event) {
	if (event.target.classList.contains('task__remove')) {
		event.preventDefault();
		event.target.closest('.task').remove();
	}
}