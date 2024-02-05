const form = document.getElementById('signin__form');
const btn = document.getElementById('signin__btn');
const signin = document.getElementById('signin');
const welcomeBox = document.getElementById('welcome');
const welcomeMessage = document.getElementById('user_id');
const login = document.getElementsByName('login')[0];


if (localStorage.getItem('id')) {
	welcome.classList.add('welcome_active');
	welcomeMessage.textContent = localStorage.getItem('id');
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const xhr = new XMLHttpRequest();
	xhr.addEventListener('load', () => {
		if (xhr.readyState === xhr.DONE) {
			let data = JSON.parse(xhr.response);

			if (data.success) {
				signin.classList.remove('signin_active');
				welcomeBox.classList.add('welcome_active');
				let id = data.user_id;
				welcomeMessage.textContent = id;
				localStorage.setItem('id', id);
			} else {
				form.reset();
				alert(`«Неверный логин/пароль»`);
			}
		}

		xhr.onerror = function() {
			alert(`Ошибка соединения: ${xhr.status}`);
		};
	});

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

	const formData = new FormData(form);
	xhr.send(formData);
});