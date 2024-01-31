const request = new XMLHttpRequest();
const titles = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
const body = document.querySelector('body');

request.addEventListener('readystatechange', () => {
	if (request.readyState === request.DONE) {

		let data = JSON.parse(request.responseText);

		titles.innerHTML = `
      <div class="poll__title" id="poll__title">
        ${data.data.title}
      </div>`;

		data.data.answers.forEach((el, index) => {
			answers.innerHTML += `
      <button class="poll__answer">
        ${data.data.answers[index]}
      </button>
    `;
		});

		const btn = document.querySelectorAll('.poll__answer');
		btn.forEach(el => {
			el.addEventListener('click', () => {
				body.innerHTML += `
        <div class="message-window">
          <div class="message-box">
            <p>«Спасибо, ваш голос засчитан!»</p>
            <button class="close">Закрыть</button>
          </div>
        </div>
        `;
				const closeBtn = document.querySelector('.close');
				const messageWindow = document.querySelector('.message-window');
				closeBtn.addEventListener('click', () => {
					messageWindow.style.display = 'none';
					location.reload();
				});
			});
		});
	}
});

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send();