const progress = document.getElementById('progress');
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const xhr = new XMLHttpRequest();

	xhr.upload.onprogress = function(event) {
		progress.setAttribute('max', event.total);
		progress.value = event.loaded;
	};

	xhr.upload.onerror = function() {
		alert(`Произошла ошибка во время отправки: ${xhr.status}`);
	};

	xhr.upload.onload = function() {
		alert(`Данные успешно отправлены.`);
	};

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
	const formData = new FormData(form);
	xhr.send(formData);
});